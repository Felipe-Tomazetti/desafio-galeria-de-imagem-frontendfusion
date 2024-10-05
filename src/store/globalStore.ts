import { create } from "zustand";

interface GlobalStore {}

interface GlobalStoreActions {}

export const useGlobalStore = create<GlobalStore & GlobalStoreActions>(
  (set) => ({})
);
