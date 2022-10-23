import { useCallback, useState } from 'react';
import client from './client';

/**
 * A React hook to send post requests and keep track of the loading status
 * of the request
 *
 * @returns the loading status and a method to send post requests
 */
export default function usePoster() {
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async <T = any, R = any>(url: string, data?: T) => {
      setIsLoading(true);
      let result;

      try {
        result = await client.post<R>(url, data);
      } finally {
        setIsLoading(false);
      }

      return result.data;
    },
    [],
  );

  return { post, isLoading };
}
