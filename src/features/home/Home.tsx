// src/components/Home.tsx
import React from 'react';
import backgroundImage from '../../assets/rbmImage1.png'; // Adjust the path as necessary
import TextImageCarousel from './TextImageCarousal';
import CustomerPage from '../commonfeature/customers/CustomerPage';

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent), url(${backgroundImage})`, // Gradient overlay from top
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Full height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white", // Change color as needed
          position: "relative",
        }}
      >
        <div style={{ paddingTop: "80px", textAlign: "center" }}>
          <h1>Welcome to My Website</h1>
          <p>Your engaging subtitle or description goes here.</p>
        </div>
      </div>
      <div>
        <TextImageCarousel />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent), url(${backgroundImage})`, // Gradient overlay from top
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh", // Full height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white", // Change color as needed
          position: "relative",
        }}
      >
        <div style={{ paddingTop: "80px", textAlign: "center" }}>
          <h1>Welcome to My Website</h1>
          <p>Your engaging subtitle or description goes here.</p>
        </div>
      </div>
      <CustomerPage/>
    </>
  );
};

export default Home;
