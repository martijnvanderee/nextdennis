const R = require("ramda");

export const reduceArgs = (params: any[]) => params.reduce(addTwoStrings);

const addTwoStrings = (accumulator: string, currentValue: any) =>
  `${accumulator}/${currentValue}`;

export const formatDate = R.split("T");
