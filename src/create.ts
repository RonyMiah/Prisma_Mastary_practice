import { PrismaClient, userRole } from '@prisma/client';

const prisma = new PrismaClient();

//*create many
const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: 'user2',
  //       email: 'jaman2@gmail.com',
  //       role: userRole.user,
  //     },
  //   });

  //*create Profile

  //   const Profile = await prisma.profile.create({
  //     data: {
  //       bio: 'this is bio',
  //       userId: 1,
  //     },
  //   });
  //   console.log(Profile);

  //* create Category

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: 'SofterEnginering ',
  //     },
  //   });
  //   console.log(createCategory);
  //* Create Post

  const createPost = await prisma.post.create({
    data: {
      title: 'This is post title ',
      content: 'This is Content of the post ',
      authorId: 1,
      PostCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 6,
          },
        ],

        //{
        //if category id you can use directly
        //   categoryId: 1,

        //other wise you can use connect

        //   category: {
        //     connect: {
        //       id: 1,
        //     },
        //   },
        //},
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
};

main();
