import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <RouterProvider router={AppRouter()} />
      </main>
    </>
  );
}

export default App;
