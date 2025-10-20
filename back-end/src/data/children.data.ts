import type { Child, Prisma } from '@prisma/client';
import prisma from '../../prisma/prismaClient';

export async function findAll(): Promise<Child[]> {
  return prisma.child.findMany();
}

export async function createOne(data: Prisma.ChildCreateInput): Promise<Child> {
  return prisma.child.create({ data });
}
