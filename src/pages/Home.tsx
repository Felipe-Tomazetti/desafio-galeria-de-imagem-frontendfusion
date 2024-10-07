import ImageList from "../components/ImageList";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center w-full">
        <ImageList />
      </div>
    </div>
  );
};

export default Home;
