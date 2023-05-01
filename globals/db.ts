import "server-only";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// グローバルスコープにPrismaClientオブジェクトが存在しない場合は、new演算子を使用して新しいPrismaClientオブジェクトを作成
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
