import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { themeColor } from "../../features/common/common";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <Card
      className="card-shadow-1"
      sx={{
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 200 }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="body1" color="text.secondary">
          {date}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            minHeight: 100, // Reserve space, but allow to grow
            color: themeColor,
            display: "flex",
            alignItems: "flex-end", // Align text to the bottom if short
          }}
        >
          {title}
        </Typography>
        <Divider sx={{ my: 2, bgcolor: "black" }} />
        <Typography
          variant="subtitle1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
