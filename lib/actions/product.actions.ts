"use server";
import prisma from "@/lib/prisma";
import { convertToPlainObject } from "../utils";
import { LATESTS_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATESTS_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
