import { createBrowserRouter } from "react-router-dom";
import ClinetLayout from "../pages";
import Categories from "../pages/Categories";
import CategoryDetail from "../pages/CategoryDetail";
import AddEditCategory from "../pages/AddEditCategory";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClinetLayout />,
    children: [
      {
        index: true,
        element: <Categories />,
      },

      {
        path: "categories/:categoryId",
        element: <CategoryDetail />,
      },
      {
        path: "addCategory",
        element: <AddEditCategory />,
      },
      {
        path: "editCategory/:categoryId",
        element: <AddEditCategory />,
      },
    ],
  },
]);
