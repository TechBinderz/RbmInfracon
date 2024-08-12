// src/components/Home.tsx
import React from 'react';
import backgroundImage from '../../assets/s2yHbjBNevw5GJfT43hEgf5Myn4.jpg'; // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use url() to set the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Change color as needed
        position: 'relative',
      }}
    >
      <div style={{ paddingTop: '80px' }}>
        <h1>Welcome to My Website</h1>
        <p>Your engaging subtitle or description goes here.</p>
      </div>
    </div>
  );
};

export default Home;
