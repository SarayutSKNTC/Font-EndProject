import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/logo.png"

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const OnThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-xl hover:bg-transparent">
          <img src={Logo} className="max-w-[80px] h-auto mr-2" alt="กลับหน้าแรก" />
        </Link>
      </div>
      
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 gap-2 mr-4">
          <li>
            <NavLink 
              to='/' 
              className={({ isActive }) => 
                `btn btn-ghost ${isActive ? 'btn-active' : ''}`
              }
            >
              หน้าแรก
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/products' 
              className={({ isActive }) => 
                `btn btn-ghost ${isActive ? 'btn-active' : ''}`
              }
            >
              สินค้า
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to='/about-us' 
              className={({ isActive }) => 
                `btn btn-ghost ${isActive ? 'btn-active' : ''}`
              }
            >
              About us
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={OnThemeChange}
            checked={theme === "dark"}   
          />
          
          {/* Sun icon */}
          <svg 
            className="swap-off fill-current w-6 h-6" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          {/* Moon icon */}
          <svg 
            className="swap-on fill-current w-6 h-6" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Navbar;