import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { headerFontSize } from "../../features/common/common";
import { StockData } from "../api/StockData";

export interface StockPriceDisplayProps {
  stockData: StockData;
}

export const StockPriceDisplay: React.FC<StockPriceDisplayProps> = ({ stockData }) => {
  const { currentPrice, priceChange } = stockData;
  const numericCurrentPrice = Number(currentPrice);
  const numericPriceChange = Number(priceChange);

  if (isNaN(numericCurrentPrice) || numericCurrentPrice === 0) {
    return null;
  }

  return (
    <Box textAlign="left">
      <Typography sx={{ fontSize: headerFontSize }}>
        NSE&nbsp;
        {numericPriceChange >= 0 ? (
          <ArrowUpwardIcon
            fontSize="small"
            sx={{ color: "green", verticalAlign: "middle" }}
          />
        ) : (
          <ArrowDownwardIcon
            fontSize="small"
            sx={{ color: "red", verticalAlign: "middle" }}
          />
        )}
        ₹{numericCurrentPrice.toFixed(2)}&nbsp;
        <span>({Math.abs(numericPriceChange).toFixed(2)}%)</span>
      </Typography>
    </Box>
  );
};

const getHeaderButtonStyle = (isScrolled: boolean) => ({
  color: isScrolled ? "black" : "inherit",
  fontSize: headerFontSize,
  margin: "0px 10px",
  textTransform: "capitalize" as const,
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap" as const,
  minWidth: 0,
  "&:hover": {
    color: "#39ac4b",
  },
});

export interface HeaderButtonProps {
  buttonText: React.ReactNode;
  linkTo: string;
  isScrolled: boolean;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  buttonText,
  linkTo,
  isScrolled,
}) => {
  return (
    <Button sx={getHeaderButtonStyle(isScrolled)} component={Link} to={linkTo}>
      {buttonText}
    </Button>
  );
};

export interface DropdownLink {
  to: string;
  text: string;
  hidden?: boolean;
  additionalServices?: Array<{
    pathName: string;
    title: string;
  }>;
}

export interface DropdownMenuProps {
  buttonText: React.ReactNode;
  links: DropdownLink[];
  isScrolled: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  buttonText,
  links,
  isScrolled,
}) => (
  <Box className="dropdown">
    <Button
      className="dropbtn"
      sx={{
        ...getHeaderButtonStyle(isScrolled),
        gap: "4px",
      }}
    >
      {buttonText}
    </Button>
    <Box className="dropdown-content">
      {links.map((link, index) => {
        const hasAdditionalServices =
          link.additionalServices && link.additionalServices.length > 0;

        return (
          <Box
            key={index}
            className={
              hasAdditionalServices
                ? "dropdown-item has-submenu"
                : "dropdown-item"
            }
          >
            <Link to={link.to} style={{ textDecoration: "none" }}>
              {link.text}
              {hasAdditionalServices && (
                <ArrowRightIcon className="submenu-arrow" />
              )}
            </Link>
            {hasAdditionalServices && link.additionalServices && (
              <Box className="submenu">
                <Link to={link.to} style={{ textDecoration: "none" }}>
                  {link.text}
                </Link>
                {link.additionalServices.map((subService, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`services/${subService.pathName}`}
                    style={{ textDecoration: "none" }}
                  >
                    {subService.title}
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  </Box>
);
