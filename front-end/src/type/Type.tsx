// types.ts
export interface Child {
  id: number;
  name: string;
  age: number;
  hairColor: string;
  eyeColor: string;
  comfortObject: string;
  mainAbility: string;
}

export interface InvisibleFriend {
  id: number;
  name: string;
  age: number | null;
  hairColor: string;
  eyeColor: string;
  comfortObject: string | null;
  mainAbility: string;
  child_id: number;
}
