import { createBrowserRouter } from "react-router-dom";
import {
  DashboardHomepage,
  InputCategory,
  InputStaff,
  LoginPage,
  PageCategory,
  ProductInput,
  StaffPage,
  TableProduct,
} from "../components/page";
import App from "../App";
import { DashboardHome } from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <InputStaff />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardHomepage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "inputproduct",
        element: <ProductInput />,
      },
      {
        path: "products",
        element: <TableProduct />,
      },
      {
        path: "reststaff",
        element: <StaffPage />,
      },
      {
        path: "inputcategory",
        element: <InputCategory />,
      },

      {
        path: "category",
        element: <PageCategory />,
      },
    ],
  },
]);
