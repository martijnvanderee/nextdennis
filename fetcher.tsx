import axios from "axios";

import { reduceArgs } from "./helpers";

export const fetcher = async (...url) => {
  if (url.length === 1) {
    const data = await axios.get(url[0]);
    return data.data;
  } else {
    const completeUrl = reduceArgs(url);
    const data = await axios.get(completeUrl);
    return data.data;
  }
};
