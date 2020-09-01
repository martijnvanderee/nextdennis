import axios from "axios";

import { reduceArgs } from "./helpers";

export const fetcher = async (url: string[], body = {}) => {
  const newURL = MakeCompleteURL(url);

  console.log(newURL, body, "url");

  if (Object.keys(body).length !== 0) {
    console.log(body, "object");
    const response = axios.post(newURL, body);
    console.log(response, "response1");
    return response;
  }

  const data = await axios.get(newURL);
  console.log(data, "data");
  return data.data;
};

const MakeCompleteURL = (url: string[]): string => {
  if (url.length === 1) return url[0];
  return reduceArgs(url);
};
