import React from "react";
import { Box } from "@mui/material";
import "./PageTitleDiv.css"; // Import the CSS file

// Define the types for props
interface PageTitleProps {
  imageUrl: string; // URL of the image to display
  tileContent: React.ReactNode; // Content of the tile (can be text, buttons, etc.)
  tilePosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const PageTitle: React.FC<PageTitleProps> = ({
  imageUrl,
  tileContent,
  tilePosition = {
    bottom: "20px",
    left: { lg: "20%", md: "4%", sm: "5%", xs: "3%" },
    top: "auto",
    right: "auto",
  }, // Default position of the tile
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* Full-width image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "45vh",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt="Full Width"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Black tint overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black tint with 50% opacity
            zIndex: 1,
          }}
        />
      </Box>
      {/* Tile with custom content */}
      <Box
        className="page-title" // Add the class for styling
        sx={{
          position: "absolute",
          color: "white",
          top: tilePosition.top,
          right: tilePosition.right,
          bottom: tilePosition.bottom,
          left: tilePosition.left,
          zIndex: 2, // Ensure tile is above the tint overlay
        }}
      >
        <h1>{tileContent}</h1> {/* Title content */}
      </Box>
    </Box>
  );
};

export default PageTitle;
