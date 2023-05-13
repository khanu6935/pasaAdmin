import axios from "axios";

const instance = axios.create({
  baseURL: "http://passaslots.netlify.app/api",
});

export { instance as axios };
