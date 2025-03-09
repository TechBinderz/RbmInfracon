import piping_service_1 from "../../assets/features/services/piping/piping_service (1).jpg";
import plate_work_1 from "../../assets/features/services/plateworks/plate_work (1).jpg";
import drilling_service_1 from "../../assets/features/services/drilling/drilling_service (1).jpg";
import heater_operation_1 from "../../assets/features/services/heater/heater_operation (1).jpg";
import steel_work_1 from "../../assets/features/services/structural/steel_work (1).jpg";
import boiler_erection_1 from "../../assets/features/services/boiler/boiler_erection (1).jpg";
import performance_1 from "../../assets/features/services/performance/performance (1).jpg";
import bundle_puller_1 from "../../assets/features/services/bundlepuller/bundlepuller (1).jpg";
import hydrojetting_1 from "../../assets/features/services/hydrojetting/hydrojetting (1).jpg";
import engineering_service_1 from "../../assets/features/services/engineering_service.jpg";
import construction_service_1 from "../../assets/features/services/construction_services/construction_service (1).jpg";
import procurment_services_1 from "../../assets/features/services/procurment_services.jpg";
import bundle_puller_2 from "../../assets/features/services/bundlepuller/bundlepuller (2).jpg";
import heavy_lifting from "../../assets/features/services/heavy_lifting.jpg";
import operation_maintenance_services from "../../assets/features/services/operation_maintenance_services.jpg";
import hydrojetting_2 from "../../assets/features/services/hydrojetting/hydrojetting (2).jpg";

// Define the card data
const serviceCardData = [
  {
    pathName: "engineeringServices",
    image: engineering_service_1,
    title: "Engineering Services",
    description:
      "Comprehensive engineering solutions including feasibility studies, detailed design, and process optimization for efficient project execution.",
    additionalServices: [],
  },
  {
    pathName: "procurementServices",
    image: procurment_services_1,
    title: "Procurement Services",
    description:
      "RBM focuses on sourcing premium materials and equipment from both domestic and international suppliers/manufacturers to support construction and operational activities.",
    additionalServices: [],
  },
  {
    pathName: "constructionServices",
    image: construction_service_1,
    title: "Construction Services",
    description:
      "RBM provides world-class construction services, ensuring adherence to international codes and best practices.",
    additionalServices: [
      {
        pathName: "pipingServices",
        title: "Piping",
        image: piping_service_1,
        description: "Comprehensive solutions for various piping systems, including installation, maintenance, and optimization to ensure functionality and safety.",
      },
      {
        pathName: "structuralSteelWork",
        title: "Structural Steel Work",
        image: steel_work_1,
        description: "Expertise in civil construction, maintenance, and erection of structural steel for various applications.",
      },
      {
        pathName: "plateWork",
        title: "Plate Work",
        image: plate_work_1,
        description: "Expert services for fabricating and erecting platework structures such as ducts, hoppers, and chutes.",
      },
    ],
  },
  {
    pathName: "renovationServices",
    image: performance_1,
    title: "Renovation & Performance Enhancement Services",
    description:
      "RBM specializes in industrial revamp and operational performance enhancement.",
    additionalServices: [
      {
        pathName: "workoverDrillingServices",
        title: "Performance Enhancement",
        image: performance_1,
        description: "Our commitment to driving performance improvements and operational excellence within the oil and gas sector.",
      },
    ],
  },
  {
    pathName: "workshopServices",
    image: bundle_puller_2,
    title: "Workshop & Warehouse Management",
    description:
      "RBM ensures streamlined warehouse and material handling operations.",
    additionalServices: [],
  },
  {
    pathName: "operationMaintenanceServices",
    image: operation_maintenance_services,
    title: "Operation, Maintenance & Inspection Services",
    description:
      "RBM provides integrated O&M services to ensure asset longevity and operational efficiency.",
    additionalServices: [],
  },
  {
    pathName: "turnaroundServices",
    image: hydrojetting_2,
    title: "Turnaround of Plants",
    description:
      "RBM is a global leader in turnaround services for refineries, petrochemicals, and fertilizer plants. With over three decades of experience.",
    additionalServices: [
      {
        pathName: "hydrojetting",
        title: "Hydrojetting",
        image: hydrojetting_1,
        description: "High-pressure water jetting services with cutting-edge technology and state-of-the-art equipment.",
      },
      {
        pathName: "boilerErectionWork",
        title: "Boiler Erection",
        image: boiler_erection_1,
        description: "Expert handling of new boiler installations, including design coordination and commissioning.",
      },
      {
        pathName: "bundlePuller",
        title: "Bundle Puller",
        image: bundle_puller_1,
        description: "Efficient bundle pulling services focused on minimizing downtime and maximizing productivity.",
      },
      {
        pathName: "heaterOperation",
        title: "Heater Operation",
        image: heater_operation_1,
        description: "Top-notch Operation and Maintenance services for heating systems.",
      },
    ],
  },
  {
    pathName: "logisticsServices",
    image: heavy_lifting,
    title: "Heavy Equipment Logistics",
    description:
      "RBM provides end-to-end heavy equipment transport and logistics solutions.",
    additionalServices: [],
  },
  {
    pathName: "drillingAndOMServices",
    image: drilling_service_1,
    title: "Crude Oil Extraction & Drilling",
    description:
      "RBM specializes in oilfield exploration and drilling services.",
    additionalServices: [],
  },
];

export default serviceCardData;
