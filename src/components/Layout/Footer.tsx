// src/components/Footer/Footer.tsx
import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div  className="mt-2 text-sm text-gray-900 dark:text-gray-100">
        <p>&copy; {new Date().getFullYear()} Matias Tamagni. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;