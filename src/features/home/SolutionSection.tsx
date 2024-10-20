import { Typography } from "@mui/material";
import ServiceCard from "../services/ServiceCards";
import cardData from "../services/ServiceCardData";

const SolutionSection = () => {
  return (
    <>
      <Typography sx={{ paddingTop: 4 }} variant="h3" fontWeight="bold"  align="center">
        Our Solutions
      </Typography>
      <ServiceCard cardData={cardData} />
    </>
  );
};

export default SolutionSection;
