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
import RailWagonLoadingServices from "../../../features/services/RailWagonLoadingServices";
import StructuralSteelWork from "../../../features/services/StructuralSteelWork";
import PlateWork from "../../../features/services/PlateWork";
import BoilerErectionWork from "../../../features/services/BoilerErectionWork";
import WorkoverDrillingServices from "../../../features/services/WorkoverDrillingServices";
import Hydrojetting from "../../../features/services/Hydrojetting";
import BundlePuller from "../../../features/services/BundlePuller";
import EngineeringServices from "../../../features/services/EngineeringServices";
import BoardOfDirectors from "../../../features/about/BoardOfDirectors";
// import HSEPerformance from "../../../features/about/HSEPerformance";
import CurrentProjects from "../../../features/about/CurrentProjects";
import ExecutedProjects from "../../../features/about/ExecutedProjects";
import Awards from "../../../features/about/Awards";
import News from "../../../features/news/News";
import ONGC_WorkOrderSigned from "../../../features/news/newsPages/ongc_work_order_signed";
import CareerPage from "../../../features/careers/CareerPage";
import JobOpenings from "../../../features/careers/JobOpenings";
import ConstructionServices from "../../../features/services/ConstructionServices";
import RenovationServices from "../../../features/services/RenovationServices";

const newsRoutes = {
  path: "news",
  element: <News />,
  children: [
    {
      path: "",
      element: <News />,
    },
    {
      path: "ongc_work_order_signed",
      element: <ONGC_WorkOrderSigned />,
    },
  ],
};

const careerRoutes = {
  path: "careers",
  element: <JobOpenings />,
};

const servicesRoutes = {
  path: "services",
  element: <Services />,
  children: [
    {
      path: "",
      element: <Services />,
    },
    {
      path: "engineeringServices",
      element: <EngineeringServices />,
    },
    {
      path: "renovationServices",
      element: <RenovationServices />,
    },
    {
      path: "constructionServices",
      element: <ConstructionServices />,
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
      path: "railWagonLoadingServices",
      element: <RailWagonLoadingServices />,
    },
    {
      path: "boilerErectionWork",
      element: <BoilerErectionWork />,
    },
    {
      path: "workoverDrillingServices",
      element: <WorkoverDrillingServices />,
    },
    {
      path: "hydrojetting",
      element: <Hydrojetting />,
    },
    {
      path: "bundlePuller",
      element: <BundlePuller />,
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
        path: "/aboutus/boardofdirector",
        element: <BoardOfDirectors />,
      },
      // {
      //   path: "/aboutus/hseperformance",
      //   element: <HSEPerformance />,
      // },
      {
        path: "/aboutus/current-projects",
        element: <CurrentProjects />,
      },
      {
        path: "/aboutus/executed-projects",
        element: <ExecutedProjects />,
      },
      {
        path: "/aboutus/awards",
        element: <Awards />,
      },
      {
        path: "/investors",
        element: <Investors />,
      },
      servicesRoutes, // Add services routes here
      newsRoutes, // Add news routes here
      careerRoutes,
      { path: "careers/CareerOpening", element: <CareerPage /> },
    ],
  },
]);
