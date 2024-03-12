import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const update = async () => {
  //update one
  const singleUpdate = await prisma.post.update({
    where: {
      id: 7,
    },
    data: {
      title: 'Updated Title',
      content: 'Updated Content',
      author: 'Updated Author',
    },
  });
  //Update Manay
  const manyUpdate = await prisma.post.updateMany({
    where: {
      title: 'This is title 4',
    },
    data: {
      published: true,
    },
  });

  console.log(manyUpdate);
};

update();
