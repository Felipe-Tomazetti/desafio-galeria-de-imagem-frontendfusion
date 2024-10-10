import { useGlobalStore } from "../../store/globalStore";
import useAPI from "../../store/api/useAPI";
import { imageListItem } from "../../types/types";

const COLORS = ["red", "blue", "green", "yellow", "black"];
const CATEGORIES = ["A", "B", "C", "D", "E"];

const useImageList = () => {
  const { get } = useAPI();
  const {
    imagesList,
    setImagesList,
    setFavoriteImagesList,
    favoriteImagesList,
  } = useGlobalStore();

  function generateRandomBooleanColor() {
    return Math.random() < 0.5;
  }

  function generateRandomBooleanCategory() {
    return Math.random() < 0.5;
  }

  const handleGetImages = async () => {
    try {
      const response = await get("https://picsum.photos/v2/list");
      const newList = response.map((item: any) => {
        const randomColor = generateRandomBooleanColor();
        const randomCategory = generateRandomBooleanCategory();

        return {
          ...item,
          isFavorite: false,
          color: randomColor,
          category: randomCategory,
        };
      });
      setImagesList(newList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavoriteImage = (imageId: string) => {
    const isAlreadyFavorited = favoriteImagesList.some(
      (image) => image.id === imageId
    );
    let updatedFavorites;

    if (isAlreadyFavorited) {
      updatedFavorites = favoriteImagesList.filter(
        (image) => image.id !== imageId
      );
    } else {
      const imageToFavorite = imagesList.find((image) => image.id === imageId);

      if (imageToFavorite) {
        updatedFavorites = [
          ...favoriteImagesList,
          { ...imageToFavorite, isFavorite: true },
        ];
      } else {
        updatedFavorites = favoriteImagesList;
      }
    }
    setFavoriteImagesList(updatedFavorites as imageListItem[]);
  };

  const checkFavorite = (imageId: string) => {
    return favoriteImagesList?.some((image) => image.id === imageId);
  };

  return {
    handleGetImages,
    imagesList,
    setFavoriteImagesList,
    handleFavoriteImage,
    checkFavorite,
  };
};

export default useImageList;
