// servicesAPI/updateChild.ts

import type { Child } from '../domain/types';

export type UpdateChildPayload = Partial<Omit<Child, 'id'>>;

export default async function updateChild(id: number, patch: UpdateChildPayload): Promise<Child> {
  const url = `http://localhost:3000/api/children/${id}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  });

  if (!res.ok) {
    throw new Error(`update failed: ${res.status}`);
  }

  const updatedChild = (await res.json()) as Child;
  return updatedChild;
}
