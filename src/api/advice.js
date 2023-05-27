import axios from "axios";

const api = async () => {
  return await axios('https://api.adviceslip.com/advice');
};

export default api;
