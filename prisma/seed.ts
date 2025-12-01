import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"
import sampleData from "../db/sample-data"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("🌱 Seeding Products...")

  // Clear Products
  await prisma.product.deleteMany()

  // Insert products
  await prisma.product.createMany({
    data: sampleData.products,
  })

  console.log("🌱 Product seeding complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
