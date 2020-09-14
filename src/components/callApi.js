import React, { useState, useEffect } from "react";
import Axios from "axios";

export function useAxiosGet(url) {
  const [req, setReq] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setReq({ loading: true, data: null, error: false });
    Axios.get(url)
      .then((response) =>
        setReq({ loading: false, data: response.data, error: false })
      )
      .catch((error) => {
        setReq({ loading: false, data: null, error: true });
      });
  }, [url]);

  return req;
}
