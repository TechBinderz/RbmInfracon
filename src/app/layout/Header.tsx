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
import RBMLOGO from '../../assets/header/Rmb_logo_big.png'; // Default logo
import SCROLLEDLOGO from '../../assets/header/Rmb_logo_small.png'; // Logo when scrolled

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [bgColor, setBgColor] = useState('transparent');
  const [buttonColor, setButtonColor] = useState('inherit'); // Default button color
  const [logoSrc, setLogoSrc] = useState(RBMLOGO); // Default logo

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('white');
      setButtonColor('black'); // Change button color to black
      setLogoSrc(SCROLLEDLOGO); // Change logo when scrolled
    } else {
      setBgColor('transparent');
      setButtonColor('inherit'); // Reset button color
      setLogoSrc(RBMLOGO); // Reset logo to default
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s ease", // Smooth transition for background color
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg" style={{ display: "flex" }}>
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
          <Toolbar sx={{ display: "flex", alignItems: "center" }}>
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
            <Button style={{ color: buttonColor }} onClick={handleMenuClick}>
              About Us
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/about" onClick={handleClose}>
                Company Info
              </MenuItem>
              <MenuItem component={Link} to="/team" onClick={handleClose}>
                Our Team
              </MenuItem>
              <MenuItem component={Link} to="/history" onClick={handleClose}>
                History
              </MenuItem>
            </Menu>

            <Button style={{ color: buttonColor }} onClick={handleMenuClick}>
              Businesses
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/business1" onClick={handleClose}>
                Business 1
              </MenuItem>
              <MenuItem component={Link} to="/business2" onClick={handleClose}>
                Business 2
              </MenuItem>
              <MenuItem component={Link} to="/business3" onClick={handleClose}>
                Business 3
              </MenuItem>
            </Menu>

            <Button style={{ color: buttonColor }} onClick={handleMenuClick}>
              Investors
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/investors" onClick={handleClose}>
                Investor Relations
              </MenuItem>
              <MenuItem component={Link} to="/reports" onClick={handleClose}>
                Reports
              </MenuItem>
              <MenuItem component={Link} to="/financials" onClick={handleClose}>
                Financials
              </MenuItem>
            </Menu>

            <Button style={{ color: buttonColor }} onClick={handleMenuClick}>
              Careers
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/careers" onClick={handleClose}>
                Job Openings
              </MenuItem>
              <MenuItem
                component={Link}
                to="/internships"
                onClick={handleClose}
              >
                Internships
              </MenuItem>
            </Menu>

            <Button style={{ color: buttonColor }} onClick={handleMenuClick}>
              News
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/news" onClick={handleClose}>
                Press Releases
              </MenuItem>
              <MenuItem component={Link} to="/media-kit" onClick={handleClose}>
                Media Kit
              </MenuItem>
            </Menu>
          </Toolbar>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
