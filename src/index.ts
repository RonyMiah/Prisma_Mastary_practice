import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: 'This is title 3',
  //       content: ' This is Content 3 ',
  //       author: 'Jack Bro 3',
  //     },
  //   });

  //   console.log(result);

  const getallFromDB = await prisma.post.findMany();
  console.log(getallFromDB);
};

main();
