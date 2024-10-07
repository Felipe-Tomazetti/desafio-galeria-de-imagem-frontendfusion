import { create } from "zustand";
import { imageListItem } from "../types/types";

interface GlobalStore {
  imagesList: imageListItem[];
  favoriteImagesList: string[];
}

interface GlobalStoreActions {
  setImagesList: (imagesList: imageListItem[]) => void;
  setFavoriteImagesList: (favoriteImagesList: string[]) => void;
}

export const useGlobalStore = create<GlobalStore & GlobalStoreActions>(
  (set) => ({
    imagesList: [],
    favoriteImagesList: [],
    setImagesList: (imagesList) => set({ imagesList }),
    setFavoriteImagesList: (favoriteImagesList) => set({ favoriteImagesList }),
  })
);
