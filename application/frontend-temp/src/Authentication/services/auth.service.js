import axios from "axios";
const API_URL = "http://localhost:8080/api/basicuser/";

class AuthService {
  register(data) {
    return axios.post(API_URL +'signup', data)
  }
  login(data) {
    return axios
      .post(API_URL + "login", data)
      .then(response => { 

        if (response.data.token !== undefined) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
        }          
        return response.data.message;
      });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  logout() {
    localStorage.removeItem("user");
  }
}
export default new AuthService();