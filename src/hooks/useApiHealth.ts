import { useEffect, useState } from "react";
import { checkBackendSever } from "../api/health.api";

export const useApiHealth = () => {
  const [apiHealth, setApiHealth] = useState<{
    message: string | null,
    status: number | null
  }>({
    message: null,
    status: null
  })
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const result = await checkBackendSever()
        setApiHealth({
          message: result.message,
          status: result.status
        })
      } catch (error: any) {
        console.log(error)
        setApiHealth({
          message: error.message,
          status: 500
        })
      }
    }
    checkHealth()
  }, []);

  return apiHealth
};
