import type { Child } from '@prisma/client';
import * as childData from '';
import type { ChildDTO } from '../../types/DTO.types/Children.DTO.types';

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
