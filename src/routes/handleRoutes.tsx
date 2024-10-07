import Home from "../pages/Home";
import FavoriteImages from "../pages/FavoriteImages";

export const renderComponent = (path: string) => {
  switch (path) {
    case "/":
      return <Home />;
    case "/home":
      return <Home />;
    case "/favoritos":
      return <FavoriteImages />;
    // case '/contato':
    //   return <Contact />;
    // case '/cadastrar':
    //   return <Register />;
    // case '/ganhadores':
    //   return <Winners />;
    // case '/consultar-raspadinhas':
    //   return <ConsultScratchCard />;
    default:
      return <></>;
  }
};
