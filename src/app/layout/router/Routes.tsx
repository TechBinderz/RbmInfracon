import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./404ErrorPage";
import App from "../App";

const Home = lazy(() => import("../../../features/home/Home"));
const OurCompany = lazy(() => import("../../../features/about/AboutUs"));
const ContactUs = lazy(() => import("../../../features/contactus/ContactUs"));
const Investors = lazy(() => import("../../../features/investors/Investors"));
const Services = lazy(() => import("../../../features/services/Service"));
const DrillingAndOMServices = lazy(() => import("../../../features/services/DrillingAndOMServices"));
const HeaterOperation = lazy(() => import("../../../features/services/HeaterOperation"));
const PipingServices = lazy(() => import("../../../features/services/PipingServices"));
const StructuralSteelWork = lazy(() => import("../../../features/services/StructuralSteelWork"));
const PlateWork = lazy(() => import("../../../features/services/PlateWork"));
const BoilerErectionWork = lazy(() => import("../../../features/services/BoilerErectionWork"));
const WorkoverDrillingServices = lazy(() => import("../../../features/services/WorkoverDrillingServices"));
const Hydrojetting = lazy(() => import("../../../features/services/Hydrojetting"));
const EngineeringServices = lazy(() => import("../../../features/services/EngineeringServices"));
const BoardOfDirectors = lazy(() => import("../../../features/about/BoardOfDirectors"));
const CurrentProjects = lazy(() => import("../../../features/about/CurrentProjects"));
const ExecutedProjects = lazy(() => import("../../../features/about/ExecutedProjects"));
const Awards = lazy(() => import("../../../features/about/Awards"));
const News = lazy(() => import("../../../features/news/News"));
const ONGC_WorkOrderSigned = lazy(() => import("../../../features/news/newsPages/ongc_work_order_signed"));
const CareerPage = lazy(() => import("../../../features/careers/CareerPage"));
const JobOpenings = lazy(() => import("../../../features/careers/JobOpenings"));
const ConstructionServices = lazy(() => import("../../../features/services/ConstructionServices"));
const RenovationServices = lazy(() => import("../../../features/services/RenovationServices"));
const WorkshopServices = lazy(() => import("../../../features/services/WorkshopServices"));
const OperationMaintenanceServices = lazy(() => import("../../../features/services/OperationMaintenanceServices"));
const TurnaroundServices = lazy(() => import("../../../features/services/TurnaroundServices"));
const LogisticsServices = lazy(() => import("../../../features/services/LogisticsServices"));
const ProcurementServices = lazy(() => import("../../../features/services/ProcurementServices"));
const PrivacyPolicy = lazy(() => import("../../common/PrivacyPolicy"));

const basename = import.meta.env.BASE_URL;

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
      path: "procurementServices",
      element: <ProcurementServices />,
    },
    {
      path: "logisticsServices",
      element: <LogisticsServices />,
    },
    {
      path: "turnaroundServices",
      element: <TurnaroundServices />,
    },
    {
      path: "operationMaintenanceServices",
      element: <OperationMaintenanceServices />,
    },
    {
      path: "workshopServices",
      element: <WorkshopServices />,
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
  ],
};

export const router = createBrowserRouter(
  [
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
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        servicesRoutes,
        newsRoutes,
        careerRoutes,
        { path: "careers/CareerOpening", element: <CareerPage /> },
      ],
    },
  ],
  {
    basename,
  }
);
