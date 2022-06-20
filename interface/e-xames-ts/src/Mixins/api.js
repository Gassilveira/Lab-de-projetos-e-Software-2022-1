import axios from "axios";
const baseUrl = import.meta.env.VUE_APP_API_URL;

const headers = {
  Accept: "application/json",
};

const headersAutorization = {
  Authorization: "Bearer ",
  Accept: "application/json",
};

const instance = axios.create();
const api = {
  async login(payload) {
    const config = {
      headers: {
        Accept: "application/json",
      }
    };
    const res = await axios
      .post(baseUrl + "login", payload, config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return res;
  },
  async getUser(token) {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    const res = await instance
      .get(baseUrl + "user", config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    console.log(res);
    return res;
  },
};

export { api };
