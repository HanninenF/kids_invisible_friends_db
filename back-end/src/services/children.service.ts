import type { Child, Prisma } from '@prisma/client';
import * as childData from '../data/children.data';
import type { ChildDTO } from '../types/DTO.types/children.DTO.types';

export const getAllChildren = async (): Promise<ChildDTO[]> => {
  const rows: Child[] = await childData.findAll();
  return rows.map(mapChildBase);
};


export const createChild = async (data: Prisma.ChildCreateInput): Promise<ChildDTO> => {
  const child = await childData.createOne(data);
  return mapChildBase(child);
};


export const deleteChild = async (id: number): Promise<boolean> => {
  try {
    const deletedChild = await childData.deleteOne(id);
    return !!deletedChild;
  } catch (error) {
    console.error('Error deleting child:', error);
    throw new Error('Failed to delete child.');
  }
};

function mapChildBase(c: Child): ChildDTO {
  return {
    id: c.id, // Lägg till ID här
    name: c.name,
    age: c.age,
    hairColor: c.hairColor,
    eyeColor: c.eyeColor,
    comfortObject: c.comfortObject,
    mainAbility: c.mainAbility,
  };
}




