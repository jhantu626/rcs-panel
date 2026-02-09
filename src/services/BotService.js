import axios from "axios";
import { API_URL } from "../config/config";

class BotService {
  constructor() {
    this.baseURL = `${API_URL}/bot`;
  }

  async getAllBots() {
    try {
      const response = await axios.get(this.baseURL);
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}


const botService = new BotService();

export {botService}