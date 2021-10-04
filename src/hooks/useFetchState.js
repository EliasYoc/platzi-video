import { useEffect, useState } from "react";

export const useFetchState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok)
          throw new Error(
            `${res.status} ${res.statusText || "ocurrió un error"}`
          );
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        alert(error);
      }
    };
    getVideos();
  }, [API]);
  return videos;
};
