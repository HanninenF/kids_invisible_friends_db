export default async function createChild(
  child: Omit<Placeholdertyper, 'id'>,
): Promise<Placeholdertyper> {
  const baseUrl = 'http://localhost:3000/api/';
  const childrenUrl = `${baseUrl}children`;

  console.log('API URL:', childrenUrl);

  const response = await fetch(childrenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(child),
  });

  if (!response.ok) {
    throw new Error(`internal server error: ${response.status}`);
  }

  const result = (await response.json()) as Placeholdertyper; //TODO: kolla hur svarstypen ser ut;

  console.log(response.status, result);
  return result;
}
