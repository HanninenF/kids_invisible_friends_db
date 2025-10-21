import type { Child } from '../domain/types';

export default async function fetchChildren(): Promise<Child[]> {
  const baseUrl = 'http://localhost:3000/api/';
  const childrenUrl = `${baseUrl}children`;

  console.log('API URL:', childrenUrl);

  //respons från API
  const response = await fetch(childrenUrl);
  const data = (await response.json()) as Child[];

  console.log(data);
  //returnera respons från API
  return data;
}
//uppdatera barn i state
