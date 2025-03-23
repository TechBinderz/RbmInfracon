import "./Header.css";
import React, { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
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
  Divider,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png";
import RBMLOGOSMALL from "../../assets/header/Rmb_logo_icon.png";
import RBMLOGOBIG from "../../assets/header/Rmb_logo_small.png";
import { checkAndUpdateStockData, StockData } from "../api/StockData";
import { headerFontSize } from "../../features/common/common";
import serviceCardData from "../../features/services/ServiceCardData";
import theme from "../../theme/theme";

interface DropdownMenuProps {
  buttonText: React.ReactNode;
  links: {
    to: string;
    text: string;
    hidden?: boolean;
    additionalServices?: Array<{
      pathName: string;
      title: string;
    }>;
  }[];
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    aboutUs: false,
    services: false,
    careers: false,
  });
  const isSmallScreen = useMediaQuery("(max-width:1100px)");

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

  const handleToggleMenu = (menu: string) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menu]: !prevOpenMenus[menu],
    }));
  };

  useEffect(() => {
    if (openMenus.services) {
      serviceCardData.forEach((service) => {
        if (service.additionalServices?.length) {
          setOpenMenus((prev) => ({
            ...prev,
            [`service_${service.pathName}`]: false,
          }));
        }
      });
    }
  }, [openMenus.services]);

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
            // style={{
            //   fontSize: headerFontSize,
            // }}
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

  const HamburgerMenu = () => (
    <ThemeProvider theme={createTheme(theme)}>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
        sx={{
          marginRight: 2,
          float: "right",
          position: "fixed",
          right: "0px",
          top: isScrolled ? "20px" : "40px",
          color: isScrolled || drawerOpen ? "black" : "white",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#f5f5f5",
            color: "#333",
            width: "80%",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            height: "100vh", // Ensures full height
          },
        }}
      >
        <Box style={{ marginBottom: 2 }}>
          <img src={RBMLOGOFULL} alt="Logo" style={{ width: "130px" }} />
        </Box>
        <Divider />
        <List sx={{ marginBottom: "80px", flexGrow: 1, overflowY: "auto" }}>
          <ListItem
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" }, // No green background, only green text on hover
              textDecoration: "none",
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            onClick={() => handleToggleMenu("aboutUs")}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" }, // No green background, only green text on hover
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="About Us" />
            {openMenus.aboutUs ? (
              <Remove sx={{ fontSize: "2rem", color: "#39ac4b" }} /> // Stylish minus icon
            ) : (
              <Add sx={{ fontSize: "2rem", color: "#39ac4b" }} /> // Stylish plus icon
            )}
          </ListItem>

          <Collapse in={openMenus.aboutUs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
              <ListItem
                component={Link}
                to="/aboutus"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem
                component={Link}
                to="/aboutus/boardofdirector"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Board Of Directors" />
              </ListItem>
              <ListItem
                component={Link}
                to="/aboutus/hseperformance"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                  display: "none", // Hide the HSE menu item
                }}
              >
                <ListItemText primary="HSE" />
              </ListItem>
              <ListItem
                component={Link}
                to="/aboutus/current-projects"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Current Projects" />
              </ListItem>
              <ListItem
                component={Link}
                to="/aboutus/executed-projects"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Executed Projects" />
              </ListItem>
              <ListItem
                component={Link}
                to="/aboutus/awards"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Awards" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            onClick={() => handleToggleMenu("services")}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              color: "#333",
              borderBottom: "0.5px solid #ccc",
              textTransform: "capitalize",
            }}
          >
            <ListItemText primary="Our Services" />
            {openMenus.services ? (
              <Remove sx={{ fontSize: "2rem", color: "#39ac4b" }} />
            ) : (
              <Add sx={{ fontSize: "2rem", color: "#39ac4b" }} />
            )}
          </ListItem>

          <Collapse in={openMenus.services} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
              <ListItem
                component={Link}
                to="/services"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="All Services" />
              </ListItem>
              {serviceCardData.map((service) => (
                <React.Fragment key={service.pathName}>
                  <ListItem
                    component={Link}
                    to={`/services/${service.pathName}`}
                    onClick={() => {
                      if (!service.additionalServices?.length) {
                        setDrawerOpen(false);
                      }
                      handleToggleMenu(`service_${service.pathName}`);
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#39ac4b",
                      },
                      textDecoration: "none",
                      color: "#333",
                    }}
                  >
                    <ListItemText primary={service.title} />
                    {service.additionalServices &&
                      service.additionalServices.length > 0 &&
                      (openMenus[`service_${service.pathName}`] ? (
                        <Remove sx={{ fontSize: "2rem", color: "#39ac4b" }} />
                      ) : (
                        <Add sx={{ fontSize: "2rem", color: "#39ac4b" }} />
                      ))}
                  </ListItem>
                  {service.additionalServices &&
                    service.additionalServices.length > 0 && (
                      <Collapse
                        in={openMenus[`service_${service.pathName}`]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          component="div"
                          disablePadding
                          sx={{ paddingLeft: 2 }}
                        >
                          <ListItem
                            component={Link}
                            to={`/services/${service.pathName}`}
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "#39ac4b",
                              },
                              textDecoration: "none",
                              color: "#333",
                              backgroundColor: "#f8f8f8",
                              fontWeight: 600,
                            }}
                          >
                            <ListItemText primary={service.title} />
                          </ListItem>
                          {service.additionalServices.map((subService) => (
                            <ListItem
                              key={subService.pathName}
                              component={Link}
                              to={`services/${subService.pathName}`}
                              onClick={() => setDrawerOpen(false)}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  color: "#39ac4b",
                                },
                                textDecoration: "none",
                                color: "#333",
                              }}
                            >
                              <ListItemText primary={subService.title} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                </React.Fragment>
              ))}
            </List>
          </Collapse>

          <ListItem
            component={Link}
            to="/investors"
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              textDecoration: "none",
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="Investors" />
          </ListItem>

          <ListItem
            onClick={() => handleToggleMenu("careers")}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="Careers" />
            {openMenus.careers ? (
              <Remove sx={{ fontSize: "2rem", color: "#39ac4b" }} />
            ) : (
              <Add sx={{ fontSize: "2rem", color: "#39ac4b" }} />
            )}
          </ListItem>

          <Collapse in={openMenus.careers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
              {/* <ListItem
                component={Link}
                to="/careers"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Job Openings" />
              </ListItem> */}
              <ListItem
                component={Link}
                to="/careers/CareerOpening"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#39ac4b",
                  },
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <ListItemText primary="Apply Online" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            component={Link}
            to="/news"
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              textDecoration: "none",
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="News & Media" />
          </ListItem>

          <ListItem
            component={Link}
            to="/contact"
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              textDecoration: "none",
              color: "#333",
              borderBottom: "0.5px solid #ccc",
            }}
          >
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>

        <Box
          sx={{
            position: "fixed",
            width: "80%",
            bottom: 0,
            // left: 0,
            right: 0,
            backgroundColor: "white",
            borderTop: "1px solid #ccc",
            padding: "10px",
            zIndex: 1300,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              paddingBottom: "env(safe-area-inset-bottom, 10px)",
            }}
          >
            <StockPriceDisplay stockData={stockData} />
          </Box>
        </Box>
      </Drawer>
    </ThemeProvider>
  );

  return (
    <ThemeProvider
      theme={createTheme({
        typography: {fontFamily: "Calibri"},
      })}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? "white" : "transparent",
          transition:
            "background-color 0.6s ease, height 0.6s ease, opacity 0.6s ease, transform 0.6s ease",
          height: isScrolled ? "80px" : "130px",
          boxShadow: isScrolled ? "0px 8px 5px 0px rgba(0, 0, 0, 0.2)" : "none",
          paddingTop: isScrolled ? "5px" : "15px",
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <Container maxWidth="xl" sx={{ display: "flex", height: "100%" }}>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Adds smooth scrolling effect
              });
            }}
          >
            <img
              src = {isSmallScreen ? (isScrolled ? RBMLOGOSMALL : RBMLOGOFULL) : (isScrolled ? RBMLOGOBIG : RBMLOGOFULL)}
              alt="Logo"
              style={{
                height: isSmallScreen 
                  ? (isScrolled ? "70px" : "95px")
                  : (isScrolled ? "80px" : "125px"),
                width: "auto",
                transition: "height 0.6s ease",
              }}
            />
          </Link>
          {isSmallScreen ? (
            <HamburgerMenu />
          ) : (
            <>
              <Box sx={{ flexGrow: 3 }}>
                {!isScrolled && (
                  <Toolbar sx={{ alignItems: "center" }}>
                    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                      <StockPriceDisplay stockData={stockData} />
                      <Box
                        sx={{ borderBottom: "1px solid lightgray", my: 1 }}
                      />
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
                      {
                        to: "/aboutus/boardofdirector",
                        text: "Board Of Directors",
                      },
                      {
                        to: "/aboutus/hseperformance",
                        text: "HSE",
                        hidden: true,
                      },
                      {
                        to: "/aboutus/current-projects",
                        text: "Current Projects",
                      },
                      {
                        to: "/aboutus/executed-projects",
                        text: "Executed Projects",
                      },
                      { to: "/aboutus/awards", text: "Awards" },
                    ].filter((link) => !link.hidden)}
                  />
                  <DropdownMenu
                    buttonText={
                      <>
                        <span>Our Services</span>
                        <ArrowDropDownIcon />
                      </>
                    }
                    links={[
                      { to: "/services", text: "All Services" },
                      ...serviceCardData.map((service) => ({
                        text: service.title,
                        to: `/services/${service.pathName}`,
                        additionalServices: service.additionalServices?.map(
                          (subService) => ({
                            pathName: subService.pathName,
                            title: subService.title,
                          })
                        ),
                      })),
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
                      // { to: "/careers", text: "Job Openings" },
                      {
                        to: "/careers/CareerOpening",
                        text: "Apply Online",
                      },
                    ]}
                  />
                  <HeaderButton
                    buttonText="News & Media"
                    linkTo="/news"
                  ></HeaderButton>
                  <HeaderButton
                    buttonText="Contact Us"
                    linkTo="/contact"
                  ></HeaderButton>
                </Toolbar>
              </Box>
            </>
          )}
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
