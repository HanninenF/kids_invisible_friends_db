import type { Child } from '../domain/types';

export default async function deleteChild(id: number): Promise<Child | { message: string }> {
  const baseUrl = 'http://localhost:3000/api/';
  const childrenUrl = `${baseUrl}children/${id}`;

  console.log('API URL:', childrenUrl);

  const response = await fetch(childrenUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 404) {
    throw new Error(`Child not found (404)`);
  }
  if (!response.ok) {
    throw new Error(`internal server error: ${response.status}`);
  }
  const result = (await response.json()) as Child;
  console.log('Delete-log: ', response.status, result);
  return result;
}
