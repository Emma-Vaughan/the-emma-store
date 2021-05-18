import { useState, useEffect } from "react";

function useFetch(url) {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCatalogue(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return {
    catalogue,
  };
}

export default useFetch;
