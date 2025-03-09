import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
  Typography,
  Stack,
  keyframes,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { themeColor } from "../common/common";

interface CardData {
  pathName: string;
  image: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  cardData: CardData[];
  showDetails: boolean;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AllServiceCards: React.FC<ServiceCardProps> = ({
  cardData,
  showDetails = true,
}) => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="body1"
        sx={{
          mb: 6,
          textAlign: "center",
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          color: "black",
          lineHeight: 1.8,
          fontSize: { xs: "1.1rem", md: "1.25rem" }
        }}
      >
        RBM is a premier provider of integrated industrial services in engineering, procurement, construction, operation, and maintenance solutions across multiple industries. We deliver excellence through innovative technologies, skilled manpower, and adherence to the highest industry standards. Our core services include
      </Typography>

      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 4, md: 5 },
          px: { xs: 2, md: 0 },
          mx: "auto",
          maxWidth: "1600px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {cardData.map((card, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s`,
            }}
          >
            <Link
              to={`/services/${card.pathName}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                height: "100%",
                display: "block",
              }}
              aria-label={`Learn more about ${card.title}`}
            >
              <Card
                component="article"
                sx={{
                  height: "100%",
                  minHeight: { xs: "550px", md: "600px" },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transform: "translateY(0) scale(1)",
                  transformOrigin: "center",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    "& .MuiCardMedia-root": {
                      transform: "scale(1.05)",
                    },
                    "& .arrow-icon": {
                      transform: "translateX(8px)",
                    },
                    "& .card-gradient": {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: "grey.100",
                    height: { xs: "300px", md: "350px" },
                    flexShrink: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={`${card.title} service illustration`}
                    sx={{
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    className="card-gradient"
                    role="presentation"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      height: "50%",
                      transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: 0.6,
                    }}
                  />
                </Box>
                <CardContent
                  component="div"
                  sx={{
                    p: { xs: 3, md: 4 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box component="header">
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: themeColor,
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: 1.3,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {card.title}
                    </Typography>
                    {showDetails && (
                      <Typography
                        variant="body1"
                        component="p"
                        color="black"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: 1.6,
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                        }}
                      >
                        {card.description}
                      </Typography>
                    )}
                  </Box>
                  <Stack
                    component="footer"
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      color: themeColor,
                      mt: "auto",
                      pt: 2,
                      "& .arrow-icon": {
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        fontSize: "1.4rem",
                      },
                    }}
                  >
                    <Typography
                      variant="button"
                      component="span"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      Learn More
                    </Typography>
                    <ArrowForward className="arrow-icon" aria-hidden="true" />
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AllServiceCards;