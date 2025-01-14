import React from 'react';
import './globals.css';
import Footer from './frontend/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;