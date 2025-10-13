import type { Child } from '@prisma/client';
import prisma from '../../prisma/prismaClient';

export async function findAll(): Promise<Child[]> {
  return prisma.child.findMany();
}
