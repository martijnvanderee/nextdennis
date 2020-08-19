export const reduceArgs = (params: any[]) => params.reduce(addTwoStrings);

const addTwoStrings = (accumulator: string, currentValue) =>
  `${accumulator}/${currentValue}`;

export const formatDate = (string: string) => string.split("T")[0];
