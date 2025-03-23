import { Typography } from "@mui/material";
import ServiceCard from "../services/ServiceCards";
import cardData from "../services/ServiceCardData";

interface SolutionSectionProps {
  showDetails: boolean;
}

const SolutionSection = ({ showDetails = true }: SolutionSectionProps) => {
  return (
    <>
      <Typography
        sx={{ paddingTop: 4 }}
        variant="h2"
        fontWeight="bold"
        align="center"
      >
        Our Solutions
      </Typography>
      <ServiceCard cardData={cardData} showDetails={showDetails} />
    </>
  );
};

export default SolutionSection;
