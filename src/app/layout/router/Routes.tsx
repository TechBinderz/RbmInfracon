import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./404ErrorPage";
import App from "../App";
import Home from "../../../features/home/Home";
import OurCompany from "../../../features/about/AboutUs";
import ContactUs from "../../../features/contactus/ContactUs";
import Investors from "../../../features/investors/Investors";
import Services from "../../../features/services/Service";
import DrillingAndOMServices from "../../../features/services/DrillingAndOMServices";
import HeaterOperation from "../../../features/services/HeaterOperation";
import PipingServices from "../../../features/services/PipingServices";
import PlateWorkFabricationErection from "../../../features/services/PlateWorkFabricationErection";
import RailWagonLoadingServices from "../../../features/services/RailWagonLoadingServices";
import StructuralSteelWork from "../../../features/services/StructuralSteelWork";
import PlateWork from "../../../features/services/PlateWork";

const servicesRoutes = {
  path: "services",
  element: <Services />,
  children: [
    {
      path: "",
      element: <Services />
    },
    {
      path: "pipingServices",
      element: <PipingServices />,
    },
    {
      path: "plateWork",
      element: <PlateWork />,
    },
    {
      path: "heaterOperation",
      element: <HeaterOperation />,
    },
    {
      path: "drillingAndOMServices",
      element: <DrillingAndOMServices />,
    },
    {
      path: "structuralSteelWork",
      element: <StructuralSteelWork />,
    },
    {
      path: "plateWorkFabricationErection",
      element: <PlateWorkFabricationErection />,
    },
    {
      path: "railWagonLoadingServices",
      element: <RailWagonLoadingServices />,
    },
  ],
};

// Define the main router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
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
      servicesRoutes, // Add services routes here
    ],
  },
]);
