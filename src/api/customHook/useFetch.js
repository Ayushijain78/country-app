import { useEffect, useState } from "react";

const useFetch = (url = "", dependency, options = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(url, options);
      const getJsonData = await data.json();
      setData(getJsonData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err || err.message);
    }
  };
  useEffect(() => {
    fetchApi();
    return () => {};
  }, [url, dependency]);

  return { data, error, isLoading };
};

export default useFetch;
