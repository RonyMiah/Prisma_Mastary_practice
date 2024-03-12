import { PrismaClient } from '@prisma/client';

//* AND OR NOT startWith Filtaring
const prisma = new PrismaClient();

const filtaring = async () => {
  const andFiltaring = await prisma.post.findMany({
    where: {
      //multiple condition er jonno Array
      AND: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(andFiltaring);

  //OR Filtaring
  const orFiltaring = await prisma.post.findMany({
    where: {
      //multiple condition er jonno Array
      OR: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(orFiltaring);

  const notFiltaring = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: false,
        },
      ],
    },
  });

  //   console.log(notFiltaring);

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: 'jaman2',
        // endsWith: '.com',
        // equals: 'jaman@gmail.com',
      },
    },
  });
  //   console.log(startWith);

  const userNameArray = ['user1', 'user2', 'user3'];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  //   console.log(userNamesByArray);

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          PostCategory: {
            include: {
              category: {
                include: {
                  postCategory: true,
                },
              },
            },
          },
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

filtaring();
