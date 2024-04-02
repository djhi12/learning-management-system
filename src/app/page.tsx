// pages/index.tsx

import React from 'react';
import Header from '../../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Welcome to the Home Page</h1>
        {/* Add your home page content here */}
      </div>
    </div>
  );
};

export default HomePage;
