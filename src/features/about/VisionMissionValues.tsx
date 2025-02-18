import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import StarsIcon from "@mui/icons-material/Stars";
import themeColor from "../common/common";

const visionMissionValues = {
  vision: {
    title: "Vision",
    content: `To be a globally recognized leader in infrastructure development, setting new benchmarks in quality, innovation, and sustainable practices while creating lasting value for all our stakeholders.`,
  },
  mission: {
    title: "Mission",
    content: `At RBM, our mission is to create meaningful, lasting impact by consistently delivering excellence to our clients, partners, and the industry at large. Through a commitment to quality, innovation, and integrity, we aim to build strong relationships, drive progress, and set new standards of success.`,
  },
  values: {
    title: "Values",
    items: [
      "Excellence in Everything We Do",
      "Integrity and Transparency",
      "Innovation and Adaptability",
      "Safety First",
      "Sustainable Development",
      "Customer Satisfaction",
    ],
  },
};

const VisionMissionValues: React.FC = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#f8f9fa",
              "&:hover": {
                boxShadow: 3,
                borderColor: themeColor,
                borderWidth: 1,
                borderStyle: "solid",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: themeColor,
                    fontWeight: "bold",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <VisibilityIcon />
                  Vision
                </Typography>
                <Divider
                  sx={{
                    width: "40px",
                    height: 2,
                    backgroundColor: themeColor,
                  }}
                />
              </Box>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {visionMissionValues.vision.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#f8f9fa",
              "&:hover": {
                boxShadow: 3,
                borderColor: themeColor,
                borderWidth: 1,
                borderStyle: "solid",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: themeColor,
                    fontWeight: "bold",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <FlagIcon />
                  Mission
                </Typography>
                <Divider
                  sx={{
                    width: "40px",
                    height: 2,
                    backgroundColor: themeColor,
                  }}
                />
              </Box>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {visionMissionValues.mission.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#f8f9fa",
              "&:hover": {
                boxShadow: 3,
                borderColor: themeColor,
                borderWidth: 1,
                borderStyle: "solid",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: themeColor,
                    fontWeight: "bold",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <StarsIcon />
                  Values
                </Typography>
                <Divider
                  sx={{
                    width: "40px",
                    height: 2,
                    backgroundColor: themeColor,
                  }}
                />
              </Box>
              <Typography variant="body1" sx={{ color: "#333" }}>
                {visionMissionValues.values.items.join("\n")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionMissionValues;
