import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="App">
      <p className="bg-dark text-warning py-5">
        copyright &copy; {currentYear} by <span className="text-info">red-onion</span>
      </p>
    </footer>
  );
};

export default Footer;
