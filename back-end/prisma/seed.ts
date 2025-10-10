import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // Rensa befintliga data först (bra under utveckling)
  await prisma.invisibleFriend.deleteMany();
  await prisma.child.deleteMany();

  // Skapa ett barn med vänner
  const lisa = await prisma.child.create({
    data: {
      name: 'Lisa',
      age: 8,
      hairColor: 'brown',
      eyeColor: 'green',
      comfortObject: 'AK-47',
      mainAbility: 'drawing',
      invisibleFriends: {
        create: [
          {
            name: 'Momo',
            age: null,
            hairColor: 'black',
            eyeColor: 'black',
            comfortObject: null,
            mainAbility: 'flying',
          },
          {
            name: 'Krampus',
            age: 500,
            hairColor: 'dark brown',
            eyeColor: 'glowing red',
            comfortObject: 'chains and bells',
            mainAbility: 'punishing naughty children',
          },
        ],
      },
    },
  });

  console.log(`Seeded child: ${lisa.name}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
