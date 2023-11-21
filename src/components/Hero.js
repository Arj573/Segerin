import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Adjust the duration as needed
      easing: 'ease-in-out', // Specify the easing function
    });
  }, []);
const orderNow = () => {
    window.scrollTo({
        top: 1150, 
        behavior: 'smooth'
    })
}

    return  (
    <section
    className="hero section"
    id="home"
    style={{backgroundImage: 'url(./media/hero-bg.jpg)'}}
  >
    
    <h1 className="hero__title" data-aos="fade-up">
      Get Your Day <br />
      With Healthy drink <br />
      Make ur life good.
    </h1>
    <button className="hero__button" onClick={orderNow} data-aos="fade-up">Order Now</button> 
  </section>
  )
}

export default Hero;