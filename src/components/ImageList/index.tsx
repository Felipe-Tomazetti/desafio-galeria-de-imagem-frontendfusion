import useImageList from "./useImageList";
import { IoIosDownload } from "react-icons/io";

const ImageList = () => {
  const { handleGetImages, imagesList } = useImageList();

  return (
    <div className="py-16 md:py-24 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Lista de imagens</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
        onClick={() => handleGetImages()}
      >
        Buscar imagens
      </button>

      <div className="flex flex-wrap justify-center mt-8">
        {imagesList.map((image) => (
          <div key={image.id} className="w-1/4 p-4">
            <div className="relative group">
              <img
                src={image.download_url}
                alt={image.author}
                className="w-full h-48 object-cover rounded-md"
              />

              <a
                href={image.download_url}
                download
                target={"_blank"}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <IoIosDownload color="white" size={"3em"} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
