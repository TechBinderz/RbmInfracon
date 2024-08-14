import './Header.css';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import RBMLOGOSMALL from '../../assets/header/Rmb_logo_small.png'; // Logo when scrolled

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        transition: 'background-color 0.6s ease, height 0.6s ease',
        height: isScrolled ? '70px' : '110px',
        boxShadow: 'none',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', height: '100%' }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ width: '80px', mr: 2, flexGrow: 1 }}
          component={Link}
          to="/"
        >
          <img
            src={isScrolled ? RBMLOGOSMALL : RBMLOGOFULL}
            alt="Logo"
            style={{
              height: isScrolled ? '60px' : '100%', // Set a fixed height for the small logo
              width: 'auto', // Maintain aspect ratio
              maxWidth: isScrolled ? 'auto' : '100%', // Allow the large logo to scale
            }}
          />
        </IconButton>
        <Box sx={{ flexGrow: 3 }}>
          {!isScrolled && (
            <Toolbar sx={{ alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: 'inherit' }}
                >
                  My Status
                </Typography>
                <Box sx={{ borderBottom: '1px solid lightgray', my: 1 }} />
              </Box>
            </Toolbar>
          )}
          <Toolbar sx={{ justifyContent: 'right' }}>
            <DropdownMenu buttonText="About Us" buttonColor={isScrolled ? 'black' : 'inherit'} links={[
              { to: '/about', text: 'Company Info' },
              { to: '/team', text: 'Our Team' },
              { to: '/history', text: 'History' },
            ]} />
            <DropdownMenu buttonText="Businesses" buttonColor={isScrolled ? 'black' : 'inherit'} links={[
              { to: '/business1', text: 'Company Info' },
              { to: '/business2', text: 'Our Team' },
              { to: '/business3', text: 'History' },
            ]} />
            <DropdownMenu buttonText="Investors" buttonColor={isScrolled ? 'black' : 'inherit'} links={[
              { to: '/investors', text: 'Investor Relations' },
              { to: '/reports', text: 'Reports' },
              { to: '/financials', text: 'Financials' },
            ]} />
            <DropdownMenu buttonText="Careers" buttonColor={isScrolled ? 'black' : 'inherit'} links={[
              { to: '/careers', text: 'Job Openings' },
              { to: '/internships', text: 'Internships' },
              { to: '/financials', text: 'Financials' },
            ]} />
            <DropdownMenu buttonText="News" buttonColor={isScrolled ? 'black' : 'inherit'} links={[
              { to: '/news', text: 'Press Releases' },
              { to: '/media-kit', text: 'Media Kit' },
            ]} />
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

const DropdownMenu: React.FC<{
  buttonText: string;
  buttonColor: string;
  links: { to: string; text: string }[];
}> = ({ buttonText, buttonColor, links }) => (
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
