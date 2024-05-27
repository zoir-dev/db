import axios from "axios";

const baseUrl = "https://sirojabdumavlonov.jprq.app/";

export const http = axios.create({
  baseURL: baseUrl,
});
