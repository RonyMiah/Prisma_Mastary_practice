import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const upsart = async () => {
  const upsartData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: 'Upsart Created title 1',
    },
    create: {
      title: 'Title 1',
      content: 'Content1',
    },
  });

  console.log(upsartData);
};

upsart();
