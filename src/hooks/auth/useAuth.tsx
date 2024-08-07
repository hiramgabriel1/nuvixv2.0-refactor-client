import { useCallback, useEffect, useState } from "react";
import { useToken } from "../../stores/useToken";

export const useAuth = () => {
  const { token, isValid } = useToken();
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const isValidToken = useCallback(async () => {
    try {
      if (!token) {
        setIsLogged(false);
        setLoading(false);
        return;
      }

      const valid = await isValid();
      setIsLogged(valid);
    } catch (error) {
      setIsLogged(false);
      // Only for development
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [token, isValid]);
  /**
   * This hook is responsible for checking if the token is valid
   */
  useEffect(() => {
    console.log("Running useEffect with checkAuth");
    isValidToken();
  }, [isValidToken]);

  return { isLogged, loading };
};
