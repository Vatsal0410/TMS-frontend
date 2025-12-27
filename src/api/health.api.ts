import axios from "axios";

export const checkApiHealth = async (): Promise<boolean> => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/health");
    return res.status === 200 ? true : false;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};
