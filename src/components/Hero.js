import React, {useEffect} from 'react';

const Hero = () => {
const orderNow = () => {
    window.scrollTo({
        top: 1150, 
        behavior: 'smooth'
    })
}

    return  (
    <div data-aos="fade-down-right">
    <section
    className="hero section"
    id="home"
    style={{backgroundImage: 'url(./media/hero-bg.jpg)'}}
  >
    
    <h1 className="hero__title">
      Get Your Day <br />
      With Healthy drink <br />
      Make ur life good.
    </h1>
    <button className="hero__button" onClick={orderNow}>Order Now</button> 
  </section>
  </div>
  )
}

export default Hero;