import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom"; // Import from react-router-dom for proper navigation
  import React from "react";
  
  // Define the structure of the card data using TypeScript
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
  
  const AllServiceCards: React.FC<ServiceCardProps> = ({
    cardData,
    showDetails = true,
  }) => {
    return (
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {cardData.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                padding: { xs: "10px", sm: "15px" },
              }}
            >
              <Card
                className="card-shadow-1"
                sx={{
                  padding: "5px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Link
                  to={`/services/${card.pathName}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardMedia
                    component="img"
                    height={showDetails ? "240" : "350"}
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent
                    sx={{
                      height: showDetails ? "245px" : "110px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      component="div"
                      textAlign="center"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "27px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    {showDetails && (
                      <Typography
                        sx={{
                          fontSize: "19px",
                        }}
                        color="text.secondary"
                      >
                        {card.description}
                      </Typography>
                    )}
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default AllServiceCards;