import axios from "axios";

let BaseApi = axios.create({
<<<<<<< HEAD
  baseURL: "https://thawing-ravine-80622.herokuapp.com/api"
=======
  baseURL: "https://thawing-ravine-80622.herokuapp.com/api/"
>>>>>>> dd699c598dd92d37e4b28c02d7993d7b9f8ea3f7
});

let Api = function() {
  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
