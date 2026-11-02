import "./Header.css";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png";
import RBMLOGOSMALL from "../../assets/header/Rmb_logo_icon.png";
import RBMLOGOBIG from "../../assets/header/Rmb_logo_small.png";
import { checkAndUpdateStockData, StockData } from "../api/StockData";
import serviceCardData from "../../features/services/ServiceCardData";
import {
  StockPriceDisplay,
  HeaderButton,
  DropdownMenu,
} from "./HeaderComponents";
import HamburgerMenu from "./HamburgerMenu";

const defaultStockData: StockData = {
  currentPrice: 0,
  priceChange: 0,
  timeUpdated: "",
};

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
  const isSmallScreen = useMediaQuery("(max-width:1265px)");

  useEffect(() => {
    let isCancelled = false;

    const updateStockData = async () => {
      const data = await checkAndUpdateStockData();
      if (!isCancelled) {
        setStockData(data);
      }
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    updateStockData();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Use requestAnimationFrame to avoid synchronous cascading renders
    const rafId = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      isCancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
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

  return (
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
              behavior: "smooth",
            });
          }}
        >
          <img
            src={
              isSmallScreen
                ? isScrolled
                  ? RBMLOGOSMALL
                  : RBMLOGOFULL
                : isScrolled
                ? RBMLOGOBIG
                : RBMLOGOFULL
            }
            alt="RBM Infracon Limited"
            style={{
              height: isSmallScreen
                ? isScrolled
                  ? "70px"
                  : "95px"
                : isScrolled
                ? "75px"
                : "105px",
              width: "auto",
              transition: "height 0.6s ease",
            }}
          />
        </Link>
        {isSmallScreen ? (
          <HamburgerMenu
            isScrolled={isScrolled}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            openMenus={openMenus}
            handleToggleMenu={handleToggleMenu}
            stockData={stockData}
          />
        ) : (
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
              <HeaderButton
                buttonText="Home"
                linkTo="/"
                isScrolled={isScrolled}
              />
              <DropdownMenu
                isScrolled={isScrolled}
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
                    to: "/aboutus/current-projects",
                    text: "Current Projects",
                  },
                  {
                    to: "/aboutus/executed-projects",
                    text: "Executed Projects",
                  },
                  { to: "/aboutus/awards", text: "Awards" },
                ]}
              />
              <DropdownMenu
                isScrolled={isScrolled}
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
                isScrolled={isScrolled}
              />
              <DropdownMenu
                isScrolled={isScrolled}
                buttonText={
                  <>
                    <span>Careers</span>
                    <ArrowDropDownIcon />
                  </>
                }
                links={[
                  {
                    to: "/careers/CareerOpening",
                    text: "Apply Online",
                  },
                ]}
              />
              <HeaderButton
                buttonText="News & Media"
                linkTo="/news"
                isScrolled={isScrolled}
              />
              <HeaderButton
                buttonText="Contact Us"
                linkTo="/contact"
                isScrolled={isScrolled}
              />
            </Toolbar>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
