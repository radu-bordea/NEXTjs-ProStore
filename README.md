# Create App
- npx create-next-app@latest nextjs-prostore

# Install shadcn
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest add sheet
- npx shadcn@latest add dropdown-menu
- npx shadcn@latest add card

# libraries
- npm install lucide-react
- npm install next-themes

### PRISMA SETUP ###
- npm install prisma tsx @types/pg --save-dev
- npm install @prisma/client @prisma/adapter-pg dotenv pg
- npx prisma init --db --output ../app/generated/prisma
- npx prisma migrate dev --name init
- npx prisma generate
- npx prisma studio
- npx prisma db seed