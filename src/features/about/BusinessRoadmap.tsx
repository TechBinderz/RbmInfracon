import React from "react";
import { Box, Container, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";
import themeColor from "../common/common";
import Logo from "../../assets/header/Rmb_logo_big.png";
import Background from "../../assets/features/about-us/business_roadmap_background.jpg";

const timelineData = [
  { year: "1993", text: "Company Started it's Business" },
  { year: "2013", text: "Incorporated as a Private Limited Co." },
  { year: "2022", text: "Enlisted with NSE as RBM Infracon Limited" },
  {
    year: "2023",
    text: "Received Single Largest Order worth 957 Crores from Epitome Industries Limited",
  },
  {
    year: "2024",
    text: "Got awarded the MPEC Contract from ONGC worth 3498 Crores",
  },
];

const BusinessRoadmap: React.FC = () => {
  const pathDetails = {
    startX: 80,
    startY: 400,
    controlX1: 450,
    controlY1: 350,
    controlX2: 500,
    controlY2: 300,
    endX: 900,
    endY: 50,
  };

  // Calculate points along the curve
  const calculatePointsAlongPath = () => {
    const startX = pathDetails.startX;
    const startY = pathDetails.startY;
    const controlX1 = pathDetails.controlX1;
    const controlY1 = pathDetails.controlY1;
    const controlX2 = pathDetails.controlX2;
    const controlY2 = pathDetails.controlY2;
    const endX = pathDetails.endX;
    const endY = pathDetails.endY;

    const points = [];
    for (let i = 0; i <= 4; i++) {
      const t = i / 4;
      // Cubic Bezier curve formula
      const x =
        Math.pow(1 - t, 3) * startX +
        3 * Math.pow(1 - t, 2) * t * controlX1 +
        3 * (1 - t) * Math.pow(t, 2) * controlX2 +
        Math.pow(t, 3) * endX;

      const y =
        Math.pow(1 - t, 3) * startY +
        3 * Math.pow(1 - t, 2) * t * controlY1 +
        3 * (1 - t) * Math.pow(t, 2) * controlY2 +
        Math.pow(t, 3) * endY;

      points.push({ x: Math.round(x), y: Math.round(y) });
    }
    return points;
  };

  const pathPoints = calculatePointsAlongPath();
  const rocketPath = pathPoints.map((point, index) => ({
    x: point.x - 50,
    y: point.y - 300,
  }));
  // Visualize points on the path (optional, for debugging)
  const renderPoints = pathPoints.map((point, index) => (
    <circle key={index} cx={point.x} cy={point.y} r="10" fill={themeColor} />
  ));

  return (
    <>
      <Box
        sx={{
          //   background: "linear-gradient(135deg, #000428 0%, #004e92 100%)",
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: "bold",
              color: themeColor,
            }}
          >
            BUSINESS ROADMAP
          </Typography>

          <Box sx={{ position: "relative", minHeight: "600px" }}>
            {/* History Text */}
            <Box sx={{ maxWidth: "600px", mb: 4, pl: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: "1.1rem" }}
              >
                RBM Infracon Limited, established in 2013 as RBM Infracon
                Private Limited and later converted to a public company in 2022,
                is an infrastructure firm specializing in construction,
                maintenance, and turnaround services for industries like oil and
                gas, petrochemicals, fertilizers, and power plants. The company
                provides structural fabrication, erection, tankage, and piping
                solutions and many more to add on. It has experienced
                significant financial growth, with Turnover surging to ₹244.57
                crore in 2024. Led by Chairman & Managing Director Mr. Jay
                Bajrang Mani, RBM Infracon continues to expand its presence in
                India's infrastructure sector.
              </Typography>
            </Box>

            {/* Timeline Path */}
            <svg
              width="100%"
              height="100%"
              style={{
                zIndex: 10,
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
            >
              <path
                d={`M ${pathDetails.startX} ${pathDetails.startY} C ${pathDetails.controlX1} ${pathDetails.controlY1}, ${pathDetails.controlX2} ${pathDetails.controlY2}, ${pathDetails.endX} ${pathDetails.endY}`}
                stroke={themeColor}
                strokeWidth="3"
                fill="none"
              />
              {renderPoints}
            </svg>

            {/* Timeline Points */}
            {/* Timeline Points */}
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: index * 0.3 }}
                // whileHover={{ scale: 1.2, opacity: 1 }}
                style={{
                  position: "absolute",
                  left: `${pathPoints[index].x}px`,
                  top: `${pathPoints[index].y + 10}px`,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      ml: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      p: 2,
                      borderRadius: 2,
                      backdropFilter: "blur(8px)",
                      maxWidth: "150px",
                      boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: themeColor, fontWeight: "bold" }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}

            {/* Rocket Icon */}
            <motion.div
              initial={{ x: rocketPath[0].x, y: rocketPath[0].y }}
              animate={{
                x: [
                  rocketPath[0].x,
                  rocketPath[1].x,
                  rocketPath[2].x,
                  rocketPath[3].x,
                  rocketPath[4].x,
                ],
                y: [
                  rocketPath[0].y,
                  rocketPath[1].y,
                  rocketPath[2].y,
                  rocketPath[3].y,
                  rocketPath[4].y,
                ],
              }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute",
              }}
            >
              <RocketLaunchIcon
                sx={{
                  fontSize: "80px",
                  color: themeColor,
                }}
              />
            </motion.div>

            {/* Company Logo */}
            <Box
              sx={{
                position: "absolute",
                right: "15%",
                bottom: "-30px",
                width: "150px",
                height: "auto",
              }}
            >
              <img
                src={Logo}
                alt="RBM Infracon Logo"
                // style={{ width: "200%", height: "auto" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BusinessRoadmap;
