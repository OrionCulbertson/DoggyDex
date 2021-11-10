import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test";

const getUserDoggyDex = () => {
  return axios.get(`${API_URL}/user/doggydex`, { headers: authHeader() });
};

export default {
  getUserDoggyDex,
};
