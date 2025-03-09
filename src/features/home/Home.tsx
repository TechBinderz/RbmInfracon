import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import backgroundImage from "../../assets/features/home/pexels-tomfisk-10407692.jpg"; // Adjust the path as necessary
// import TextImageCarousel from "./TextImageCarousal";
import CustomerPage from "../common/CustomerPage";
import SolutionSection from "./SolutionSection";
import CompanySection from "./CompanySection";
import NewsSection from "./NewsSection";
import StatisticsPoliciesSection from "../common/StatisticsPoliciesSection";
import useScrollEffect from "../hooks/useScrollEffect"; // Import the custom hook
import CompanyDescription from "./CompanyDescription";
import serviceCardData from "../services/ServiceCardData";
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

        {/* Text Overlay */}
        <div className="text-overlay">
          <h1>Empowered by the Resonance of Excellence</h1>
          <div className="buttons">
            <Link to="/aboutus">
              <button className="hero-btn"> About Us →</button>
            </Link>
            <Link to="/contact">
              <button className="hero-btn"> Contact Us →</button>
            </Link>
          </div>
        </div>

        {/* Marquee Section with CSS Scrolling */}
        <div className="marquee-container">
          <div className="marquee-content">
            <Link to="/services" className="marquee-link">
              All Services |
            </Link>
            {serviceCardData.map((service) => (
              <React.Fragment key={service.pathName}>
                <Link to={`/services/${service.pathName}`} className="marquee-link">
                  {service.title} |
                </Link>
                {/* {service.additionalServices?.map((subService) => (
                  <Link
                    key={subService.pathName}
                    to={`/services/${subService.pathName}`}
                    className="marquee-link"
                  >
                    {subService.title} |
                  </Link>
                ))} */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <Container>
        {/* Add "hidden" class to animate sections on scroll */}
        <br/>
        <div className="hidden">
          <CompanyDescription />
        </div>
        <div className="hidden">
          <SolutionSection showDetails={false} />
        </div>
        <div className="hidden">
          <CompanySection />
        </div>
        {/* <div className="hidden">
          <TextImageCarousel />
        </div> */}
        <br/>
        <div className="hidden">
          <NewsSection />
        </div>
        <br/>
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
