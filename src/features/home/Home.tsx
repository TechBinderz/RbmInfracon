import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import backgroundImage from "../../assets/features/home/home1.jpg"; // Adjust the path as necessary
import TextImageCarousel from "./TextImageCarousal";
import CustomerPage from "../common/CustomerPage";
import SolutionSection from "./SolutionSection";
import CompanySection from "./CompanySection";
import NewsSection from "./NewsSection";
import StatisticsPoliciesSection from "../common/StatisticsPoliciesSection";
import useScrollEffect from "../hooks/useScrollEffect"; // Import the custom hook
import "./home.css";

const Home: React.FC = () => {
  // Apply the scroll effect
  useScrollEffect("hidden");

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
            <Link to="/aboutus">
              <button className="hero-btn"> About Us →</button>
            </Link>
            <Link to="/contact">
              <button className="hero-btn"> Contact Us →</button>
            </Link>
          </div>
        </div>
      </div>

      <Container>
        {/* Add "hidden" class to animate sections on scroll */}
        <div className="hidden">
          <SolutionSection />
        </div>
        <div className="hidden">
          <CompanySection />
        </div>
        <div className="hidden">
          <TextImageCarousel />
        </div>
        <div className="hidden">
          <NewsSection />
        </div>
        <div className="hidden">
          <StatisticsPoliciesSection />
        </div>
        <div className="hidden">
          <CustomerPage />
        </div>
      </Container>
    </>
  );
};

export default Home;
