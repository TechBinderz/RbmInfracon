import "./Header.css";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png";
import RBMLOGOSMALL from "../../assets/header/Rmb_logo_small.png";
import { checkAndUpdateStockData, StockData } from "../api/StockData";
import { headerFontSize } from "../../features/common/common";

interface DropdownMenuProps {
  buttonText: React.ReactNode;
  links: { to: string; text: string }[];
}

const defaultStockData: StockData = {
  currentPrice: 0,
  priceChange: 0,
  timeUpdated: "",
};

interface HeaderButtonProps {
  buttonText: string;
  linkTo: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stockData, setStockData] = useState<StockData>(defaultStockData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateStockData = async () => {
      const data = await checkAndUpdateStockData();
      setStockData(data);
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    updateStockData();
    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const StockPriceDisplay: React.FC<{ stockData: StockData }> = ({
    stockData,
  }) => {
    const { currentPrice, priceChange } = stockData;

    if (currentPrice === 0) return null;

    return (
      <Box textAlign="left">
        <Typography sx={{ fontSize: headerFontSize }}>
          NSE&nbsp;
          {priceChange >= 0 ? (
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
          ₹{currentPrice.toFixed(2)}&nbsp;
          <span
            style={{
              fontSize: headerFontSize,
              fontFamily: "Arial, sans-serif",
            }}
          >
            ({Math.abs(priceChange).toFixed(2)}%)
          </span>
        </Typography>
      </Box>
    );
  };

  const headerButtonStyle = {
    color: isScrolled ? "black" : "inherit",
    fontSize: headerFontSize,
    margin: "0px 10px",
    textTransform: "capitalize",
    "&:hover": {
      color: "#39ac4b",
      // backgroundColor: "#39ac4b",
    },
  };

  const HeaderButton: React.FC<HeaderButtonProps> = ({
    buttonText,
    linkTo,
  }) => {
    return (
      <Button sx={headerButtonStyle} component={Link} to={linkTo}>
        {buttonText}
      </Button>
    );
  };

  const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonText, links }) => (
    <Box className="dropdown">
      <Button className="dropbtn" sx={headerButtonStyle}>
        {buttonText}
      </Button>
      <Box className="dropdown-content">
        {links.map((link, index) => (
          <Link key={index} to={link.to} style={{ textDecoration: "none" }}>
            {link.text}
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        transition:
          "background-color 0.6s ease, height 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
        height: isScrolled ? "70px" : "110px",
        boxShadow: isScrolled ? "0px 8px 5px 0px rgba(0, 0, 0, 0.2)" : "none",
        paddingTop: isScrolled ? "0px" : "15px",
        opacity: isMounted ? 1 : 0,
        transform: isMounted ? "translateY(0)" : "translateY(-20px)",
      }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", height: "100%" }}>
        <Link to="/">
          <img
            src={isScrolled ? RBMLOGOSMALL : RBMLOGOFULL}
            alt="Logo"
            style={{ height: isScrolled ? "70px" : "100px", width: "auto" }}
          />
        </Link>
        <Box sx={{ flexGrow: 3 }}>
          {!isScrolled && (
            <Toolbar sx={{ alignItems: "center" }}>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <StockPriceDisplay stockData={stockData} />
                <Box sx={{ borderBottom: "1px solid lightgray", my: 1 }} />
              </Box>
            </Toolbar>
          )}

          <Toolbar
            sx={{
              justifyContent: "right",
              marginTop: isScrolled ? "5px" : "0px",
            }}
          >
            <HeaderButton buttonText="Home" linkTo="/"></HeaderButton>
            <DropdownMenu
              buttonText={
                <>
                  <span>About Us</span>
                  <ArrowDropDownIcon />
                </>
              }
              links={[
                { to: "/aboutus", text: "About Us" },
                { to: "/aboutus/boardofdirector", text: "Board Of Directors" },
                { to: "/aboutus/hseperformance", text: "HSE" },
              ]}
            />
            <DropdownMenu
              buttonText={
                <>
                  <span>Services</span>
                  <ArrowDropDownIcon />
                </>
              }
              links={[
                { text: "All Services", to: "/services" },
                { text: "Piping Services", to: "/services/pipingServices" },
                { text: "Plate Work", to: "/services/plateWork" },
                { text: "Heater Operation", to: "/services/heaterOperation" },
                { text: "Drilling and O&M Services of Crewed Wells", to: "/services/drillingAndOMServices", },
                { text: "Structural Steel Work", to: "/services/structuralSteelWork", },
                { text: "Rail Wagon Loading Services", to: "/services/railWagonLoadingServices", },
              ]}
            />
            <HeaderButton
              buttonText="Investors"
              linkTo="/investors"
            ></HeaderButton>
            <DropdownMenu
              buttonText={
                <>
                  <span>Careers</span>
                  <ArrowDropDownIcon />
                </>
              }
              links={[
                { to: "/careers", text: "Job Openings" },
                { to: "/internships", text: "Internships" },
                { to: "/financials", text: "Financials" },
              ]}
            />
            <HeaderButton buttonText="News" linkTo="/news"></HeaderButton>
            <HeaderButton
              buttonText="Contact Us"
              linkTo="/contact"
            ></HeaderButton>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
