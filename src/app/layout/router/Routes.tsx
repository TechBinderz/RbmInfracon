import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../../../features/home/Home";
import AboutUs from "../../../features/about/AboutUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);