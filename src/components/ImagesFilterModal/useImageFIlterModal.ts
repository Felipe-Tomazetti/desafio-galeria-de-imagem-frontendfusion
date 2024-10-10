import { useState } from "react";

interface useImageFilterModalProps {
  applyFilter: (filter: string) => void;
  closeFilter: () => void;
}

const useImageFilterModal = ({
  applyFilter,
  closeFilter,
}: useImageFilterModalProps) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleApplyFilter = () => {
    applyFilter(selectedFilter);
    closeFilter();
  };

  return {
    handleApplyFilter,
    setSelectedFilter,
    selectedFilter,
  };
};

export default useImageFilterModal;
