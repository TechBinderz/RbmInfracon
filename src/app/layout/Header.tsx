import './Header.css';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import RBMLOGOSMALL from '../../assets/header/Rmb_logo_small.png'; // Logo when scrolled
import { checkAndUpdateStockData, StockData } from '../api/StockData'; // Import functions


interface DropdownMenuProps {
  buttonText: React.ReactNode;
  buttonColor: string;
  links: { to: string; text: string }[];
}

const defaultStockData: StockData = {
  currentPrice: 0,
  priceChange: 0,
  timeUpdated: ""
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stockData, setStockData] = useState<StockData>(defaultStockData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateStockData = async () => {
      const data = await checkAndUpdateStockData();
      setStockData(data);
    };

    updateStockData();
    window.addEventListener('scroll', handleScroll);
    
    // Trigger the transition on mount
    setIsMounted(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const StockPriceDisplay: React.FC<{ stockData: StockData }> = ({ stockData }) => {
    const { currentPrice, priceChange } = stockData;

    if (currentPrice === 0) return null;

    return (
      <div style={{ textAlign: "left" }}>
        {priceChange >= 0 && (
          <span style={{ fontSize: "0.8em" }}>
            NSE&nbsp;
            <ArrowUpwardIcon
              fontSize="small"
              style={{ color: "green", verticalAlign: "middle" }}
            />
            ₹{currentPrice.toFixed(2)}{" "}
            <span
              style={{ fontSize: "0.8em", fontFamily: "Arial, sans-serif" }}
            >
              ({priceChange.toFixed(2)}%)
            </span>
          </span>
        )}
        {priceChange < 0 && (
          <span style={{ fontSize: "0.8em" }}>
            NSE&nbsp;
            <ArrowDownwardIcon
              fontSize="small"
              style={{ color: "red", verticalAlign: "middle" }}
            />
            ₹{currentPrice.toFixed(2)}{" "}
            <span
              style={{ fontSize: "0.8em", fontFamily: "Arial, sans-serif" }}
            >
              ({Math.abs(priceChange).toFixed(2)}%)
            </span>
          </span>
        )}
      </div>
    );
  };

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
      <Container maxWidth="lg" sx={{ display: "flex", height: "100%" }}>
        <Link to='/'>
          <img
            src={isScrolled ? RBMLOGOSMALL : RBMLOGOFULL}
            alt="Logo"
            style={{
              height: isScrolled ? "70px" : "100px", 
              width: "auto", 
              maxWidth: isScrolled ? "auto" : "100%", 
            }}
          />
        </Link>
        <Box sx={{ flexGrow: 3 }}>
          {!isScrolled && (
            <Toolbar sx={{ alignItems: "center" }}>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "inherit" }}
                >
                  <StockPriceDisplay stockData={stockData} />
                </Typography>
                <Box sx={{ borderBottom: "1px solid lightgray", my: 1 }} />
              </Box>
            </Toolbar>
          )}
          <Toolbar sx={{ justifyContent: "right" }}>
            <DropdownMenu
              buttonText={
                <>
                  <span>About Us</span>
                  <ArrowDropDownIcon />
                </>
              }
              buttonColor={isScrolled ? "black" : "inherit"}
              links={[
                { to: "/aboutus", text: "Company Info" },
                { to: "/team", text: "Our Team" },
                { to: "/history", text: "History" },
              ]}
            />
            <DropdownMenu
              buttonText={
                <>
                  <span>Businesses</span>
                  <ArrowDropDownIcon />
                </>
              }
              buttonColor={isScrolled ? "black" : "inherit"}
              links={[
                { to: "/business1", text: "Company Info" },
                { to: "/business2", text: "Our Team" },
                { to: "/business3", text: "History" },
              ]}
            />
            {/* Removed the Investors Dropdown */}
            <Button
              sx={{ color: isScrolled ? "black" : "inherit" }}
              component={Link}
              to="/investors"
            >
              Investors
            </Button>
            <DropdownMenu
              buttonText={
                <>
                  <span>Careers</span>
                  <ArrowDropDownIcon />
                </>
              }
              buttonColor={isScrolled ? "black" : "inherit"}
              links={[
                { to: "/careers", text: "Job Openings" },
                { to: "/internships", text: "Internships" },
                { to: "/financials", text: "Financials" },
              ]}
            />
            <DropdownMenu
              buttonText={
                <>
                  <span>News</span>
                  <ArrowDropDownIcon />
                </>
              }
              buttonColor={isScrolled ? "black" : "inherit"}
              links={[
                { to: "/news", text: "Press Releases" },
                { to: "/media-kit", text: "Media Kit" },
              ]}
            />
            <Button
              sx={{ color: isScrolled ? "black" : "inherit" }}
              component={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonText, buttonColor, links }) => (
  <Box className="dropdown">
    <Button
      className="dropbtn"
      sx={{ color: buttonColor }}
    >
      {buttonText}
    </Button>
    <Box className="dropdown-content">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          style={{ textDecoration: 'none' }}
        >
          {link.text}
        </Link>
      ))}
    </Box>
  </Box>
);

export default Header;
