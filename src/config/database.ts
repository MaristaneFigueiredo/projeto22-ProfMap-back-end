import { PrismaClient } from '@prisma/client';

export let prisma = new PrismaClient();

export function connectDb(): void {
  prisma = new PrismaClient();
}

export async function disconnectDb(): Promise<void> {
  await prisma?.$disconnect();
}
