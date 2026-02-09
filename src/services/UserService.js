import axios from "axios";
import { API_URL } from "../config/config";

class UserService {
  constructor() {
    this.baseURL = `${API_URL}/user`;
  }

  async profile(token) {
    const uri = `${this.baseURL}/profile`;
    try {
      const res = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const userService = new UserService();

export { userService };
