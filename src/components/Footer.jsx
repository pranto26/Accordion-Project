import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 position-fixed bottom-0 w-100">
      <div className="container">
        <p>© {new Date().getFullYear()} Pranto Saha. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;