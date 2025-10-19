export default async function fetchChildren(): Promise<Placeholdertype[]> {
  const baseUrl = 'http://localhost:3000/api/';
  const childrenUrl = `${baseUrl}children`;

  console.log('API URL:', childrenUrl);

  //respons från API
  const response = await fetch(childrenUrl);
  const data = (await response.json()) as Placeholdertype[];

  console.log(data);
  //returnera respons från API
  return data;
}
//uppdatera barn i state
//måste kunna hämta children/:id för att kunna ta bort och skapa barn
