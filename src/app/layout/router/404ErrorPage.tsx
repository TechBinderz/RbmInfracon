import React, { useState, useLayoutEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import themeColor from "../../../features/common/common";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const [divHeight, setDivHeight] = useState(window.innerHeight);

  // Calculate the height considering the footer's height
  useLayoutEffect(() => {
    const updateHeight = () => {
      const footerElement = document.getElementById("footer");
      const footerHeight = footerElement ? footerElement.clientHeight : 0;
      setDivHeight(window.innerHeight - footerHeight);
    };

    updateHeight(); // Initial calculation

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const goHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: `${divHeight}px`,
        backgroundImage: 'linear-gradient(to bottom, rgb(53 44 11 / 42%), transparent)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "50px"
        }}
      >
        <Typography variant="h1" color={themeColor} sx={{ fontSize: "96px" }}>
          404
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Oops! The page you are looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          It seems the page you are looking for has either been moved or never existed.
        </Typography>
        <Button
          variant="contained"
          onClick={goHome}
          sx={{ mt: 4, px: 4, backgroundColor: themeColor }}
        >
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;
