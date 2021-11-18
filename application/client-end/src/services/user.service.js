import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test";

// const getUserDoggyDex = () => {
//   return axios.get(`${API_URL}/user/doggydex`, { headers: authHeader() });
// };

const getUserDoggyDex = () => {
  return axios.get(`/api/userdoggydex/getDogs`, { headers: authHeader() })
    .then(res => {
      const fetchedDoggyDex = res.data.breedIDs.map((entry) => {
        return entry.doggydexbreedid;
      })
      // console.log(fetchedDoggyDex);
      return fetchedDoggyDex;
    }).catch(e => console.log(e));
};

export default {
  getUserDoggyDex,
};
