import {  useEffect, useState } from "react";

export const useFetch = (url, init = []) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(init);
  const [Error, setError] = useState(null);
  const Fetch = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Http error status:${res.status}`);
      }
      const json = await res.json();
      setProduct(json.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Fetch();
  }, [Fetch]);

  return { loading, Error, product, Fetch };
};
