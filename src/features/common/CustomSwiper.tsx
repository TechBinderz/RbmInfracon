import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { themeColor } from "./common";

interface CustomSwiperProps {
  items: {
    id?: string | number;
    content: React.ReactNode;
  }[];
  className?: string;
  slidesPerViewMap?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const defaultSlidesPerViewMap = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 4,
};

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  items,
  className = "custom-swiper",
  slidesPerViewMap = defaultSlidesPerViewMap,
}) => {
  return (
    <Box sx={{ position: "relative", mx: { xs: -2, md: -4 }, mb: 6 }}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        pagination={{ 
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          1536: {
            slidesPerView: slidesPerViewMap.xl || 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: slidesPerViewMap.lg || 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: slidesPerViewMap.md || 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: slidesPerViewMap.sm || 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: slidesPerViewMap.xs || 1,
            spaceBetween: 16,
          },
        }}
        style={{ 
          padding: "20px 50px 60px",
        }}
        className={className}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            {item.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .${className} .swiper-button-next,
          .${className} .swiper-button-prev {
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .${className} .swiper-button-next:hover,
          .${className} .swiper-button-prev:hover {
            background-color: ${themeColor};
          }

          .${className} .swiper-button-next::after,
          .${className} .swiper-button-prev::after {
            font-size: 20px;
            color: ${themeColor};
            transition: color 0.3s ease;
          }

          .${className} .swiper-button-next:hover::after,
          .${className} .swiper-button-prev:hover::after {
            color: white;
          }

          .${className} .swiper-button-next {
            right: 10px;
          }

          .${className} .swiper-button-prev {
            left: 10px;
          }

          .${className} .swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #e0e0e0;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: ${themeColor};
            transform: scale(1.2);
          }
        `}
      </style>
    </Box>
  );
};

export default CustomSwiper;
