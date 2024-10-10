import ImagesFilterModal from "../ImagesFilterModal";
import useImagesFilter from "./useImagesFilter";

const ImagesFilter = () => {
  const { showFilter, handleApplyFilter, toggleFilter } = useImagesFilter();

  return (
    <div className="ml-80 mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleFilter}
      >
        Filtros
      </button>

      {showFilter && (
        <div className="mt-4">
          <ImagesFilterModal
            applyFilter={handleApplyFilter}
            closeFilter={toggleFilter}
          />
        </div>
      )}
    </div>
  );
};

export default ImagesFilter;
