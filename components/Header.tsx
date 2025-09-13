import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = ({ isMobile, closeMenu }: { isMobile?: boolean; closeMenu?: () => void }) => {
  const links = [
    { to: '/', text: 'Главная' },
    { to: '/about', text: 'О нас' },
    { to: '/products', text: 'Продукты' },
    { to: '/media', text: 'Медиа' },
    { to: '/contact', text: 'Контакты' },
  ];

  const baseLinkClass = "font-bold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full";
  const activeLinkClass = "after:w-full";

  if (isMobile) {
    return (
      <ul className="flex flex-col items-center justify-center h-full">
        {links.map((link) => (
          <li key={link.to} className="mb-8">
            <NavLink
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-3xl font-bold text-gray-800 ${isActive ? 'text-blue-700' : ''}`
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : 'text-gray-800'}`}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 text-gray-800 no-underline">
              <img src="https://picsum.photos/seed/logo/100/100" alt="Логотип Цифровая Философия" className="h-12 w-12 animate-pulse-glow" />
              <span className="text-xl font-semibold hidden sm:block">Цифровая философия</span>
            </Link>
            <nav>
              <NavLinks />
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 flex flex-col justify-around w-7 h-6 bg-transparent border-none cursor-pointer p-0"
            >
              <div className={`w-full h-0.5 bg-gray-800 rounded-md transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-800 rounded-md transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-800 rounded-md transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}></div>
            </button>
          </div>
        </div>
      </header>
      
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="h-full">
           <NavLinks isMobile closeMenu={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </>
  );
};

export default Header;
