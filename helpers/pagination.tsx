const R = require("ramda");

const paginate = {
  totalItems: 150,
  currentPage: 7,
  pageSize: 15,
  totalPages: 10,
  startPage: 5,
  endPage: 9,
  startIndex: 90,
  endIndex: 104,
  pages: [5, 6, 7, 8, 9],
};

export const roundNumber = (number: number) => Math.ceil(number);

export const test = R.compose(R.divide(paginate.totalItems, paginate.pageSize));
