import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Add, Remove } from "@mui/icons-material";
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png";
import serviceCardData from "../../features/services/ServiceCardData";
import { StockData } from "../api/StockData";
import { StockPriceDisplay } from "./HeaderComponents";

export interface HamburgerMenuProps {
  isScrolled: boolean;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  openMenus: { [key: string]: boolean };
  handleToggleMenu: (menu: string) => void;
  stockData: StockData;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isScrolled,
  drawerOpen,
  setDrawerOpen,
  openMenus,
  handleToggleMenu,
  stockData,
}) => {
  return (
    <>
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
            height: "100vh",
            paddingBottom: "70px",
          },
        }}
      >
        <Box style={{ marginBottom: 2 }}>
          <img src={RBMLOGOFULL} alt="RBM Infracon Logo" style={{ width: "130px" }} />
        </Box>
        <Divider />
        <List sx={{ marginBottom: "80px", flexGrow: 1, overflowY: "auto" }}>
          <ListItem
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
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
              "&:hover": { backgroundColor: "transparent", color: "#39ac4b" },
              color: "#333",
              borderBottom: "0.5px solid #ccc",
              cursor: "pointer",
            }}
          >
            <ListItemText primary="About Us" />
            {openMenus.aboutUs ? (
              <Remove sx={{ fontSize: "2rem", color: "#39ac4b" }} />
            ) : (
              <Add sx={{ fontSize: "2rem", color: "#39ac4b" }} />
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
              cursor: "pointer",
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
              cursor: "pointer",
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
    </>
  );
};

export default HamburgerMenu;
