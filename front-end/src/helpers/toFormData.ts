import type { Child } from '../domain/types';
import type { FormData } from '../type/DataType';
export default function toFormData(child: Omit<Child, 'id'>): FormData {
  return {
    namn: child.name,
    ålder: child.age.toString(),
    hårfärg: child.hairColor,
    ögonfärg: child.eyeColor,
    snutte: child.comfortObject,
    förmåga: child.mainAbility,
  };
}
