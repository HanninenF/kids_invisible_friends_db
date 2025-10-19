// servicesAPI/updateChild.ts

export type UpdateChildPayload = Partial<Omit<Placeholdertype, 'id'>>;

export default async function updateChild(
  id: number,
  patch: UpdateChildPayload,
): Promise<Placeholdertype> {
  const url = `http://localhost:3000/api/children/${id}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  });

  if (!res.ok) {
    throw new Error(`update failed: ${res.status}`);
  }

  const updatedChild = (await res.json()) as Placeholdertype;
  return updatedChild;
}
