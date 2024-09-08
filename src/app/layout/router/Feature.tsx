import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

// Controls router page div
const Feature: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling effect
    });
  }, [pathname]);

  return <Outlet/>;
};

export default Feature;
