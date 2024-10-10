import { useEffect, useState } from "react";
import { useGlobalStore } from "../../store/globalStore";

const useImagesFilter = () => {
  const { imagesList, setImagesList } = useGlobalStore();
  const [showFilter, setShowFilter] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState("");

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleApplyFilter = (filter: string) => {
    setAppliedFilter(filter);
  };

  useEffect(() => {
    if (appliedFilter === "color") {
      const filteredList = imagesList.filter((image) => image.color);
      setImagesList(filteredList);
    } else if (appliedFilter === "category") {
      const filteredList = imagesList.filter((image) => image.category);
      setImagesList(filteredList);
    }
  }, [appliedFilter]);
  return {
    handleApplyFilter,
    showFilter,
    toggleFilter,
  };
};

export default useImagesFilter;
