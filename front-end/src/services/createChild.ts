import type { Child } from '../domain/types';

export default async function createChild(child: Omit<Child, 'id'>): Promise<Child> {
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
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ''}`);
  }

  const result = (await response.json()) as Child; //TODO: kolla hur svarstypen ser ut;

  console.log(response.status, result);
  return result;
}
