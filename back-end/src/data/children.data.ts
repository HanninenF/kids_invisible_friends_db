import type { Child, Prisma } from '@prisma/client';
import prisma from '../../prisma/prismaClient';

export async function findAll(): Promise<Child[]> {
  return prisma.child.findMany();
}

export async function createOne(data: Prisma.ChildCreateInput): Promise<Child> {
  return prisma.child.create({ data });
}


export const deleteOne = async (id: number): Promise<Child | null> => {
  try {
    const deletedChild = await prisma.child.delete({
      where: { id }, // Raderar barnet baserat på id
    });
    return deletedChild; // Returnera det raderade barnet om det lyckades
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
      console.log('No child found to delete with the given id.');
      // Prisma felkoden P2025 innebär att inget barn hittades med det angivna id:t
      console.log(`No child found with id: ${id}`);
      return null; // Om inget barn hittades, returnera null
    }
    console.error('Error deleting child in data layer:', error);
    throw new Error(`Failed to delete child with id: ${id}`);
  }
};