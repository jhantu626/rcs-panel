import axios from "axios";
import { API_URL } from "../config/config";

class AuthService {
  constructor() {
    this.baseUrl = API_URL + "auth";
  }

  async login(username, password) {
    try {
      const uri = `${this.baseUrl}/login?username=${username}&password=${password}`;
      const res = await axios.post(uri);
      const data = await res.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async createUser(token,payload){
    try {
      const res=await axios.post(this.baseUrl,payload,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data=await res.data;
      return data;
    } catch (error) {
      const data=await error.response.data;
      return data;
    }
  }

}

const authService = new AuthService();

export { authService };
