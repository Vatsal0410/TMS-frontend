import axios from "axios"

export const checkBackendSever = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/health')
    return {
      message: res.data.message,
      status: res.status
    }
  } catch (error:any) {
    return {
      message: "Error fetching health data",
      status: error.response.status || 500
    }
  }
}