// src/components/Home.tsx
import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import backgroundImage from '../../assets/features/home/home1.jpg'; // Adjust the path as necessary
import TextImageCarousel from './TextImageCarousal';
import CustomerPage from '../common/CustomerPage';
import BannerButton from './BannerButton';
import SolutionSection from './SolutionSection';
import CompanySection from './CompanySection';
import NewsSection from './NewsSection';
import StatisticsPoliciesSection from '../common/StatisticsPoliciesSection';
import './home.css';

const Home: React.FC = () => {
  return (
    <>
    <div className="hero-section">
      {/* Background Image */}
      <div className="image-overlay">
        <img src={backgroundImage} alt="Image" className="background-image" />
      </div>
        <div className="text-overlay">
        <h1>Building Strong Foundations</h1>
        <div className="buttons">
        <Link to="/aboutus"><button className="hero-btn"> About Us →</button></Link>
        <Link to="/contact"><button className="hero-btn"> Contact Us →</button></Link>
        </div>
      </div>
    </div>

      <div>
        <TextImageCarousel />
      </div>
      
      <BannerButton />
      <Container>
      <SolutionSection />
      <CompanySection />
      <NewsSection />
      <StatisticsPoliciesSection/>
      <CustomerPage/>  
      </Container>
    </>
  );
};

export default Home;
