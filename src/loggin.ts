import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
});

prisma.$on('query', (e) => {
  console.log(e.query);
  console.log(e.duration, 'ms');
  console.log(e.target);
});

const main = async () => {
  const getAllDB = await prisma.post.findMany({});

  //   console.log(getAllDB);
};

main();
