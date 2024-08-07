import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/routes";


import "./assets/base.scss"
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
