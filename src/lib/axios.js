import axios from "axios";

const instance = axios.create({
  baseURL: "https://passaslots.netlify.app/api",
});

export { instance as axios };
