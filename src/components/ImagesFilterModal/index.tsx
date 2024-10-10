import useImageFilterModal from "./useImageFIlterModal";

interface ImagesFilterModalProps {
  applyFilter: (filter: string) => void;
  closeFilter: () => void;
}

const ImagesFilterModal: React.FC<ImagesFilterModalProps> = ({
  applyFilter,
  closeFilter,
}) => {
  const { handleApplyFilter, setSelectedFilter, selectedFilter } =
    useImageFilterModal({
      applyFilter,
      closeFilter,
    });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-bold mb-4">Filtrar Imagens</h3>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="filter"
              value="color"
              checked={selectedFilter === "color"}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="mr-2 w-4 h-4 cursor-pointer"
            />
            Cor
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="filter"
              value="category"
              checked={selectedFilter === "category"}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="mr-2 w-4 h-4 cursor-pointer"
            />
            Categoria
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleApplyFilter}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Aplicar
          </button>
          <button
            onClick={closeFilter}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesFilterModal;
