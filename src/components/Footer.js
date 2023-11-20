import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Segerin</h1>
        <p className="footer__description">
          Ur healthy life <br />
          Start from here.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Binus alam sutera, Tangerang <br />
              Selasar gor, meja 4
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +62 812-1245-8200 <br />
              segerinnn@email.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Grand Opening</h2>
            <p className="footer__information">
              Friday <br />
              1PM - 4PM
            </p>
          </div>
          <div className="footer__data">
            <p className="footer__newsletter-description">
              Subscribe to our newsletter
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
             className="footer__input"
              />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="#gmail" target="_blank" className="footer__social-link">
              <i className="bx bxl-gmail"></i>
            </a>
            <a href="#instagram" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
          </ul>

          <span className="footer__copy"> &#169; 2023 Segerin. All rigths reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer