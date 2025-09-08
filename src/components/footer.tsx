import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/OLO.png"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center gap-2 bg-base-300  mt-auto shadow ">
        
          <img className='w-5 h-5 mb-4  mt-3.5' src={Logo} alt="Logo" />

        
        <p className="text-gray-500 mt-3">
          {currentYear} - Sarayut Dechpaeng | Tanadol Kamin | Samchai Puuto
        </p>
      
    </footer>
  );
}

export default Footer;