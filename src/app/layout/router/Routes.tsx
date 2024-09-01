import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../../../features/home/Home";
import OurCompany from "../../../features/about/OurCompany";
import ContactUs from "../../../features/contactus/ContactUs";
import Investors from "../../../features/investors/Investors";


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
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <OurCompany />,
      },
      {
        path: "/investors",
        element: <Investors />,
      },
    ],
  },
]);