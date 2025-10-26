import type { Child } from '../domain/types';

export default async function deleteChild(id: number): Promise<Child | { message: string } | null> {
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
    throw new Error(`Internal server error: ${response.status}`);
  }

  // hantera svar utan body (t.ex. 204 No Content)
  if (response.status === 204) {
    console.log('Delete successful — no content returned.');
    return null;
  }

  // kolla först om det finns text
  const text = await response.text();
  if (!text) {
    console.log('Delete successful — empty body.');
    return null;
  }

  const result = JSON.parse(text) as Child;
  console.log('Delete-log:', response.status, result);
  return result;
}
