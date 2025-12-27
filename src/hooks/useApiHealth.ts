import { useEffect, useState } from "react";
import { checkApiHealth } from "../api/health.api";

export const useApiHealth = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  useEffect(() => {
    const checkHealth = async () => {
        try {
            const result = await checkApiHealth()
            setIsOnline(result)
        } catch (error) {
            console.log(error)
            setIsOnline(false)
        }
    }

    checkHealth()
  }, [])

  return isOnline

}