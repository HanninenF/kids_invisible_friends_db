import type { Child } from '../domain/types';
import type { FormData } from '../type/DataType';

export default function toChild(form: FormData): Omit<Child, 'id'> {
  return {
    name: form.namn,
    age: Number(form.ålder),
    hairColor: form.hårfärg,
    eyeColor: form.ögonfärg,
    comfortObject: form.snutte,
    mainAbility: form.förmåga,
  };
}
