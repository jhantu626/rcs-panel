import axios from "axios";
import { API_URL } from "../config/config";

class BotService {
  constructor() {
    this.baseURL = `${API_URL}bot`;
  }

  async getAllBots(token) {
    try {
      const response = await axios.get(this.baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const botService = new BotService();

export { botService };
