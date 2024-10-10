import useImageList from "./useImageList";
import ImagesFilter from "../ImagesFilter";
import { IoIosDownload } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ImageList = () => {
  const { handleGetImages, imagesList, handleFavoriteImage, checkFavorite } =
    useImageList();

  return (
    <div className="py-16 md:py-24 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Lista de imagens</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
        onClick={() => handleGetImages()}
      >
        Buscar imagens
      </button>

      <div className="sm:ml-0 md:ml-80 lg:ml-80">
        <ImagesFilter />
      </div>

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
                className="absolute inset-0 flex p-2 items-start justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <IoIosDownload color="white" size={"2em"} />
              </a>

              {checkFavorite(image.id) ? (
                <FaStar
                  onClick={() => handleFavoriteImage(image.id)}
                  color="yellow"
                  size={"2em"}
                  className="absolute inset-0 flex p-2 items-start justify-end  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              ) : (
                <FaRegStar
                  onClick={() => handleFavoriteImage(image.id)}
                  color="white"
                  size={"2em"}
                  className="absolute inset-0 flex p-2 items-start justify-end  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
