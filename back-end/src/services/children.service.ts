import type { Child, Prisma } from '@prisma/client';
import * as childData from '../data/children.data';
import type { ChildDTO } from '../types/DTO.types/children.DTO.types';

export const getAllChildren = async (): Promise<ChildDTO[]> => {
  const rows: Child[] = await childData.findAll();
  return rows.map(mapChildBase);
};

function mapChildBase(c: Child): ChildDTO {
  return {
    name: c.name,
    age: c.age,
    hairColor: c.hairColor,
    eyeColor: c.eyeColor,
    comfortObject: c.comfortObject,
    mainAbility: c.mainAbility,
  };
}

export const createChild = async (data: Prisma.ChildCreateInput): Promise<ChildDTO> => {
  const child = await childData.createOne(data);
  return mapChildBase(child);
};
