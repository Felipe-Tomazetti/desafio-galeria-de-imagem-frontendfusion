import { useAPIStore } from "./apiStore";

const useAPI = () => {
  const { get, post, put } = useAPIStore();

  return { get, post, put };
};

export default useAPI;
