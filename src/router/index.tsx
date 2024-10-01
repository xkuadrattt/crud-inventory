import { createBrowserRouter } from "react-router-dom";
import {
  DashboardHomepage,
  InputCategory,
  InputStaff,
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
        path: "inputstaff",
        element: <InputStaff />,
      },
      {
        path: "category",
        element: <PageCategory />,
      },
    ],
  },
]);
