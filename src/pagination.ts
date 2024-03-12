//Pagination 2 Type

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//* Offset Pagination
//! Bad Things is query time is very high >> that is limitation
//skip >> how much data we will skip
//limit >> how much data we will show in our pages >> take
const paginationSorting = async () => {
  const offsetPagination = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });
  //   console.log('Offset Pagination data :', offsetPagination);

  //* Coursor Pagination
  // koto data theke start korbe countiong >> Cursor : 25 >> 25 number data you will start

  const currsorPagination = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 20,
    },
  });

  //   console.log(currsorPagination);

  //* Sorting

  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: 'asc',
    },
    skip: 0,
    take: 5,
    where: {
      title: 'Title 1',
    },
  });
  console.log(sortedData);
};

paginationSorting();
