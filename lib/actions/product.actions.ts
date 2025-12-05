"use server";
import prisma from "@/lib/prisma";
import { convertToPlainObject } from "../utils";
import { LATESTS_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    take: LATESTS_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  const serialized = products.map((p) => ({
    ...p,
    price: p.price.toNumber(),       // 🔥 Convert Decimal → number
    rating: p.rating.toNumber(),     // 🔥 Convert Decimal → number
  }));

  return convertToPlainObject(serialized);
}


// Get single product by its slug
export async function getProductBySlug(slug: string) {
  const p = await prisma.product.findFirst({
    where: { slug },
  });

  if (!p) return null;

  return {
    ...p,
    price: p.price.toNumber(),
    rating: p.rating.toNumber(),
  };
}

