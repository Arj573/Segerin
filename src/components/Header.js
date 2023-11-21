import React, { useState, useEffect } from 'react';

const Header = () => {

  const [changeHeader, setChangeHeader] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
    return () => {
      window.removeEventListener('scroll', changeHeaderColor);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${changeHeader && 'scroll-header'}`} id="header">
      <nav className="nav container">
        <div className="logo__container">
          <a href="#home" className="nav__logo">
            <img className="nav__icon" src="./media/logo.png" alt="Logo" />
          </a>
          <a href="#home" className="nav__logo">
            Segerin
          </a>
        </div>
        <div className={`nav__menu ${isNavOpen ? 'open' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={closeNav}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link" onClick={closeNav}>
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link" onClick={closeNav}>
                Place
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link" onClick={closeNav}>
                Blog
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleNav}>
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
