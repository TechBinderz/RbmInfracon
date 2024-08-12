// src/components/Header.tsx
import React, { useState, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import RBMLOGO from '../../assets/RBMLOGO.png';

const Header: React.FC = () => {
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
  const [anchorElBusinesses, setAnchorElBusinesses] = useState<null | HTMLElement>(null);
  const [anchorElInvestors, setAnchorElInvestors] = useState<null | HTMLElement>(null);
  const [anchorElCareers, setAnchorElCareers] = useState<null | HTMLElement>(null);
  const [anchorElNews, setAnchorElNews] = useState<null | HTMLElement>(null);

  const handleAboutClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleBusinessesClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElBusinesses(event.currentTarget);
  };

  const handleInvestorsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElInvestors(event.currentTarget);
  };

  const handleCareersClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElCareers(event.currentTarget);
  };

  const handleNewsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNews(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAbout(null);
    setAnchorElBusinesses(null);
    setAnchorElInvestors(null);
    setAnchorElCareers(null);
    setAnchorElNews(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo Link to Home */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 4 }}>
            <Link to="/">
              <img src={RBMLOGO} alt="Logo" style={{ height: '80px' }} />
            </Link>
          </IconButton>

          {/* Dropdown Menu for About Us */}
          <Button color="inherit" onClick={handleAboutClick}>
            About Us
          </Button>
          <Menu
            anchorEl={anchorElAbout}
            open={Boolean(anchorElAbout)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/about" onClick={handleClose}>Company Info</MenuItem>
            <MenuItem component={Link} to="/team" onClick={handleClose}>Our Team</MenuItem>
            <MenuItem component={Link} to="/history" onClick={handleClose}>History</MenuItem>
          </Menu>

          {/* Dropdown Menu for Businesses */}
          <Button color="inherit" onClick={handleBusinessesClick}>
            Businesses
          </Button>
          <Menu
            anchorEl={anchorElBusinesses}
            open={Boolean(anchorElBusinesses)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/business1" onClick={handleClose}>Business 1</MenuItem>
            <MenuItem component={Link} to="/business2" onClick={handleClose}>Business 2</MenuItem>
            <MenuItem component={Link} to="/business3" onClick={handleClose}>Business 3</MenuItem>
          </Menu>

          {/* Dropdown Menu for Investors */}
          <Button color="inherit" onClick={handleInvestorsClick}>
            Investors
          </Button>
          <Menu
            anchorEl={anchorElInvestors}
            open={Boolean(anchorElInvestors)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/investors" onClick={handleClose}>Investor Relations</MenuItem>
            <MenuItem component={Link} to="/reports" onClick={handleClose}>Reports</MenuItem>
            <MenuItem component={Link} to="/financials" onClick={handleClose}>Financials</MenuItem>
          </Menu>

          {/* Dropdown Menu for Careers */}
          <Button color="inherit" onClick={handleCareersClick}>
            Careers
          </Button>
          <Menu
            anchorEl={anchorElCareers}
            open={Boolean(anchorElCareers)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/careers" onClick={handleClose}>Job Openings</MenuItem>
            <MenuItem component={Link} to="/internships" onClick={handleClose}>Internships</MenuItem>
          </Menu>

          {/* Dropdown Menu for News */}
          <Button color="inherit" onClick={handleNewsClick}>
            News
          </Button>
          <Menu
            anchorEl={anchorElNews}
            open={Boolean(anchorElNews)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/news" onClick={handleClose}>Press Releases</MenuItem>
            <MenuItem component={Link} to="/media-kit" onClick={handleClose}>Media Kit</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
