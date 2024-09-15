// CustomerCard.tsx
import React from "react";
import { styled } from "@mui/system";

interface CustomerCardProps {
  image: string;
  title: string;
}

// Styled div for the customer card
const StyledDiv = styled("div")(() => ({
  width: "100%",
  borderRadius: 10,
  //boxShadow: '8px 8px 15px 6px rgba(0, 0, 0, 0.1)',
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "center",
  overflow: "hidden",
  alignContent: "center",
}));

// Styled image inside the div
const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
});

const CustomerCard: React.FC<CustomerCardProps> = ({ image, title }) => {
  return (
    <StyledDiv>
      <StyledImage src={image} alt={title} />
    </StyledDiv>
  );
};

export default CustomerCard;
