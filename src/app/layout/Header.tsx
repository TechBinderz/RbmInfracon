// src/components/Header.tsx
import React, { useState, MouseEvent, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import RBMLOGOSMALL from '../../assets/header/Rmb_logo_small.png'; // Logo when scrolled

const Header: React.FC = () => {
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
  const [anchorElBusinesses, setAnchorElBusinesses] = useState<null | HTMLElement>(null);
  const [anchorElInvestors, setAnchorElInvestors] = useState<null | HTMLElement>(null);
  const [anchorElCareers, setAnchorElCareers] = useState<null | HTMLElement>(null);
  const [anchorElNews, setAnchorElNews] = useState<null | HTMLElement>(null);
  const [bgColor, setBgColor] = useState('transparent');
  const [buttonColor, setButtonColor] = useState('inherit'); // Default button color
  const [logoSrc, setLogoSrc] = useState(RBMLOGOFULL); // Default logo
  const [appBarHeight, setAppBarHeight] = useState('110px'); // Default height

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('white');
      setButtonColor('black'); // Change button color to black
      setLogoSrc(RBMLOGOSMALL); // Change logo when scrolled
      setAppBarHeight('70px'); // Change height when scrolled
    } else {
      setBgColor('transparent');
      setButtonColor('inherit'); // Reset button color
      setLogoSrc(RBMLOGOFULL); // Reset logo to default
      setAppBarHeight('110px'); // Reset height to default
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAboutOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorElAbout(event.currentTarget);
  };
  const handleAboutOut = () => {
    setAnchorElAbout(null);
  };
  const handleBusinessesOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorElBusinesses(event.currentTarget);
  };
  const handleBusinessesOut = () => {
    setAnchorElBusinesses(null);
  };
  const handleInvestorsOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorElInvestors(event.currentTarget);
  };
  const handleInvestorsOut = () => {
    setAnchorElInvestors(null);
  };
  const handleCareersOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorElCareers(event.currentTarget);
  };
  const handleCareersOut = () => {
    setAnchorElCareers(null);
  };
  const handleNewsOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNews(event.currentTarget);
  };
  const handleNewsOut = () => {
    setAnchorElNews(null);
  };

  const handleClose = () => {
    setAnchorElAbout(null);
    setAnchorElBusinesses(null);
    setAnchorElInvestors(null);
    setAnchorElCareers(null);
    setAnchorElNews(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: bgColor,
        transition: "background-color 0.6s ease, height 0.6s ease", // Smooth transition for background color and height
        height: appBarHeight,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg" style={{ display: "flex", height: appBarHeight }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ width: "80px", mr: 2, flexGrow: 1 }} // Larger IconButton
        >
          <Link to="/">
            <img
              src={logoSrc}
              alt="Logo"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
        </IconButton>
        <div style={{ flexGrow: 3 }}>
          {/* Top Section (Logo and My Status) */}
          <Toolbar sx={{ display: appBarHeight === '70px' ? 'none' : "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                style={{ color: buttonColor }}
              >
                My Status
              </Typography>
              <Box sx={{ borderBottom: "1px solid lightgray", my: 1 }} />
            </Box>
          </Toolbar>

          {/* Bottom Section (Menu Buttons) */}
          <Toolbar sx={{ justifyContent: "right" }}>
            <Button
              style={{ color: buttonColor }}
              onMouseEnter={handleAboutOver}
              // onMouseLeave={handleAboutOut}
            >
              About Us
            </Button>
            <Menu
              anchorEl={anchorElAbout}
              open={Boolean(anchorElAbout)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/about" onClick={handleClose}>Company Info</MenuItem>
              <MenuItem component={Link} to="/team" onClick={handleClose}>Our Team</MenuItem>
              <MenuItem component={Link} to="/history" onClick={handleClose}>History</MenuItem>
            </Menu>

            <Button
              style={{ color: buttonColor }}
              onMouseEnter={handleBusinessesOver}
              // onMouseLeave={handleBusinessesOut}
            >
              Businesses
            </Button>
            <Menu
              anchorEl={anchorElBusinesses}
              open={Boolean(anchorElBusinesses)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/business1" onClick={handleClose}>Business 1</MenuItem>
              <MenuItem component={Link} to="/business2" onClick={handleClose}>Business 2</MenuItem>
              <MenuItem component={Link} to="/business3" onClick={handleClose}>Business 3</MenuItem>
            </Menu>

            <Button
              style={{ color: buttonColor }}
              onMouseEnter={handleInvestorsOver}
            >
              Investors
            </Button>
            <Menu
              anchorEl={anchorElInvestors}
              open={Boolean(anchorElInvestors)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/investors" onClick={handleClose}>Investor Relations</MenuItem>
              <MenuItem component={Link} to="/reports" onClick={handleClose}>Reports</MenuItem>
              <MenuItem component={Link} to="/financials" onClick={handleClose}>Financials</MenuItem>
            </Menu>

            <Button
              style={{ color: buttonColor }}
              onMouseEnter={handleCareersOver}
            >
              Careers
            </Button>
            <Menu
              anchorEl={anchorElCareers}
              open={Boolean(anchorElCareers)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem component={Link} to="/careers" onClick={handleClose}>Job Openings</MenuItem>
              <MenuItem component={Link} to="/internships" onClick={handleClose}>Internships</MenuItem>
            </Menu>

            <Button
              style={{ color: buttonColor }}
              onMouseEnter={handleNewsOver}
            >
              News
            </Button>
            <Menu
              anchorEl={anchorElNews}
              open={Boolean(anchorElNews)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}

            >
              <MenuItem component={Link} to="/news" onClick={handleClose}>Press Releases</MenuItem>
              <MenuItem component={Link} to="/media-kit" onClick={handleClose}>Media Kit</MenuItem>
            </Menu>
          </Toolbar>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
