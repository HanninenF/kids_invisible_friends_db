export type Child = {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  eyeColor: string;
  comfortObject: string;
  mainAbility: string;
};

export type InvisibleFriend = {
  id: string;
  childId: string;
  name: string;
  age?: number | null;
  hairColor: string;
  eyeColor: string;
  comfortObject?: string | null;
  mainAbility: string;
};

export type State = {
  children: Child[];
  friends: InvisibleFriend[];
};
