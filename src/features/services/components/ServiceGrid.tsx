import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { themeColor } from "../../common/common";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface ServiceGridProps {
  services: ServiceItem[];
  title: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, title }) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 4,
          color: themeColor,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
              className="card-shadow"
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.grey[100],
                      mr: 2,
                      "&:hover": {
                        backgroundColor: themeColor,
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                  >
                    {service.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align="left"
                    color={themeColor}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body2" paragraph align="left">
                  {service.description}
                </Typography>
                <List dense>
                  {service.benefits.map((benefit, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircle
                          sx={{
                            color: themeColor,
                            width: theme.typography.body2.fontSize,
                            height: theme.typography.body2.fontSize,
                            marginRight: theme.spacing(1),
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={benefit}
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ServiceGrid;
