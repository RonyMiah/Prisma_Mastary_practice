import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user;
  //* fluent Api
  // .findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })
  // .post();

  //* Include Query >> as like populate in mongodb
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //       include: {
  //         post: true,
  //       },
  //     });
  //   console.log(result);

  //* relational filters

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
