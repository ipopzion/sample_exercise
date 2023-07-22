import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios(`https://api.apis.guru/v2/${endpoint}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert('There is an error');
      } finally {
        setIsLoading(false);
      }
    }

    if (endpoint !== null) {
      fetchData();
    }
  }, [endpoint])

  return { data, isLoading, error }
}

export default useFetch;