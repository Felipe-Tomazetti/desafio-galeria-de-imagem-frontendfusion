import Home from "../pages/Home";

export const renderComponent = (path: string) => {
  switch (path) {
    case "/":
      return <Home />;
    case "/home":
      return <Home />;
    default:
      return <></>;
  }
};
