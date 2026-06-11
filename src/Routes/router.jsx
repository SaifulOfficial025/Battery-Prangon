import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Product/Home";
import ProductDetails from "../Pages/Product/ProductDetails/Home";
import ConfirmOrder from "../Pages/ConfirmOrder/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />
      },
      {
        path: "/confirm-order",
        element: <ConfirmOrder />
      }
    ]
  }
]);
