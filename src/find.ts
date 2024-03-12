import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //find all
  const getallFromDB = await prisma.post.findMany();

  //find first and find first or throw  Error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  //unick find and find unick throw Error

  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 15,
    },
    select: {
      title: true,
      author: true,
    },
  });

  console.log({ findUnique });
  //   console.log(getallFromDB);
};

main();
