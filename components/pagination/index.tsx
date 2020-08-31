const R = require("ramda");
import React from "react";

// const paginate = {
//   totalItems: 130,
//   currentPage: 7,
//   pageSize: 15,
//   totalPages: 10,
//   startPage: 5,
//   endPage: 9,
//   startIndex: 90,
//   endIndex: 104,
//   pages: [5, 6, 7, 8, 9],
// };

// const paginationLogic = (
//   totalItems,
//   currentPage = 1,
//   pageSize = 10,
//   maxPagesShow = 10
// ) => {
//   const roundNumberUp = (number: number) => Math.ceil(number);
//   const roundNumberDown = (number: number) => Math.floor(number);
//   const divideRoundedUp = R.compose(roundNumberUp, R.divide);

//   const totalPages = divideRoundedUp(totalItems, pageSize);
//   const startIndex = R.multiply(R.dec(currentPage), pageSize);
//   let endIndex = R.min(R.add(startIndex, R.dec(pageSize)), R.dec(totalItems));

//   let maxPagesBeforeCurrentPage = Math.floor(maxPagesShow / 2);
//   let maxPagesAfterCurrentPage = Math.ceil(maxPagesShow / 2) - 1;

//   let checkTotal = R.gte(maxPagesShow, totalPages);
//   let checkTotal1 = R.gte(currentPage, maxPagesBeforeCurrentPage);
//   let checkTotal2 = R.gte(
//     R.add(currentPage + maxPagesAfterCurrentPage),
//     totalPages
//   );

//   const result = (totalPages) => ({ startPage: 1, endPage: totalPages });
//   const result1 = (maxPagesShow) => ({ startPage: 1, endPage: maxPagesShow });
//   const result2 = (totalPages) => ({ startPage: 1, endPage: totalPages });
//   const result3 = (totalPages) => ({ startPage: 1, endPage: totalPages });

//   const startpageFunc = (maxPagesShow, totalPages, currentPage) => {
//     if (totalPages <= maxPagesShow)
//       return { startPage: 1, endPage: totalPages };

//     // total pages more than max so calculate start and end pages
//     let maxPagesBeforeCurrentPage = Math.floor(maxPagesShow / 2);
//     let maxPagesAfterCurrentPage = Math.ceil(maxPagesShow / 2) - 1;
//     if (currentPage <= maxPagesBeforeCurrentPage)
//       // current page near the start
//       return { startPage: 1, endPage: maxPagesShow };

//     if (currentPage + maxPagesAfterCurrentPage >= totalPages)
//       // current page near the end
//       return {
//         startPage: totalPages - maxPagesShow + 1,
//         endPage: totalPages,
//       };

//     // current page somewhere in the middle
//     return {
//       startPage: currentPage - maxPagesBeforeCurrentPage,
//       endPage: currentPage + maxPagesAfterCurrentPage,
//     };
//   };

//   const { startPage, endPage } = startpageFunc(
//     maxPagesShow,
//     totalPages,
//     currentPage
//   );

//   return {
//     totalItems,
//     currentPage,
//     pageSize,
//     totalPages,
//     startIndex,
//     endIndex,
//     startPage,
//     endPage,
//     page: R.range(startPage, R.inc(endPage)),
//   };
// };

export const Pagination = () => {
  // const pag = paginationLogic(150, 7, 15, 5);
  // console.log(pag);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">10</span>
            of
            <span className="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              1
            </a>
            <a
              href="#"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              2
            </a>
            <a
              href="#"
              className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              3
            </a>
            <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              8
            </a>
            <a
              href="#"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              9
            </a>
            <a
              href="#"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              10
            </a>
            <a
              href="#"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
              aria-label="Next"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
