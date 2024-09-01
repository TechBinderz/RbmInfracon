import React from "react";
import { Box } from "@mui/material";

// Define the types for props
interface PageTitleProps {
  imageUrl: string; // URL of the image to display
  tileContent: React.ReactNode; // Content of the tile (can be text, buttons, etc.)
  tilePosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }; // Optional positioning for the tile
}

const PageTitle: React.FC<PageTitleProps> = ({
  imageUrl,
  tileContent,
  tilePosition = { bottom: "20px", left: "20%" }, // Default position of the tile
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
        sx={{
          position: "absolute",
        //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          color: "white",
        //   padding: "10px",
        //   borderRadius: "8px",
          top: tilePosition.top,
          right: tilePosition.right,
          bottom: tilePosition.bottom,
          left: tilePosition.left,
          zIndex: 2, // Ensure tile is above the tint overlay
        }}
      >
        <h1 >
        {tileContent}
        </h1>
      </Box>
    </Box>
  );
};

export default PageTitle;
