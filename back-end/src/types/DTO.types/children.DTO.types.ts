/* typerna korrekt beskriver strukturen på data som skickas mellan lager eller system
de är separerade från raw-data och databastyper
och att de är klara att använda i ex controllers, services eller frontend */

export type ChildDTO = {
  name: string;
  age: number;
  hairColor: string;
  eyeColor: string;
  comfortObject: string;
  mainAbility: string;
};
