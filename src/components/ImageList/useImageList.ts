import { useEffect, useState } from "react";
import { useGlobalStore } from "../../store/globalStore";
import useAPI from "../../store/api/useAPI";

const useImageList = () => {
  const { get } = useAPI();
  const { imagesList, setImagesList } = useGlobalStore();

  const handleGetImages = async () => {
    try {
      const response = await get("https://picsum.photos/v2/list");
      setImagesList(response);
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleGetImages, imagesList };
};

export default useImageList;
