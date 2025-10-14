/* 
fetch:
fetcha barn från databasen
*/
//type placeholder
export type Fetched = {
  data: [];
};
export default async function fetchChildren(): Promise<Fetched> {
  const baseUrl = 'http://localhost:3000/api/';
  const childrenUrl = `${baseUrl}children`;

  console.log('API URL:', childrenUrl);

  //respons från API
  const response = await fetch(childrenUrl);
  const data = (await response.json()) as Fetched;

  //returnera respons från API
  return data;
}
//uppdatera barn i state
