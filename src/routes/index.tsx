import { createBrowserRouter, Navigate } from "react-router-dom";
import { renderComponent } from "./handleRoutes";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: renderComponent("/"),
    },
    {
      path: "/home",
      element: renderComponent("/home"),
    },
    {
      path: "/favoritos",
      element: renderComponent("/favoritos"),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return router;
};
