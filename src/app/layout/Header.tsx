import "./Header.css";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png";
import RBMLOGOSMALL from "../../assets/header/Rmb_logo_small.png";
import { checkAndUpdateStockData, StockData } from "../api/StockData";
import { headerFontSize } from "../../features/common/common";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  buttonText: React.ReactNode;
  links: { to: string; text: string }[];
}

const defaultStockData: StockData = {
  currentPrice: 0,
  priceChange: 0,
  timeUpdated: "",
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stockData, setStockData] = useState<StockData>(defaultStockData);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

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
          <span style={{ fontSize: headerFontSize, fontFamily: "Arial" }}>
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
    },
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

  const renderMobileMenu = (
    <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/aboutus" onClick={toggleDrawer}>
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton component={Link} to="/services" onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton component={Link} to="/investors" onClick={toggleDrawer}>
            <ListItemText primary="Investors" />
          </ListItemButton>
          <ListItemButton component={Link} to="/careers" onClick={toggleDrawer}>
            <ListItemText primary="Careers" />
          </ListItemButton>
          <ListItemButton component={Link} to="/news" onClick={toggleDrawer}>
            <ListItemText primary="News" />
          </ListItemButton>
          <ListItemButton component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        transition: "all 0.6s ease",
        height: isScrolled ? "70px" : "110px",
        boxShadow: isScrolled ? "0px 8px 5px rgba(0,0,0,0.2)" : "none",
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

        {isMobile ? (
          <IconButton onClick={toggleDrawer} sx={{ marginLeft: "auto" }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Toolbar sx={{ justifyContent: "right" }}>
            <Button sx={headerButtonStyle} component={Link} to="/">
              Home
            </Button>
            <DropdownMenu buttonText="About Us" links={[{ to: "/aboutus", text: "About Us" }]} />
          </Toolbar>
        )}
      </Container>
      {renderMobileMenu}
    </AppBar>
  );
};

export default Header;
