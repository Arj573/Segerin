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
    style={{backgroundImage: 'url(./media/herobg.jpeg)'}}
  >
    
    <h1 className="hero__title" data-aos="fade-down" data-aos-duration="3000">
      Get Your Day <br />
      With Healthy drink <br />
      Make ur good life.
    </h1>
    <button className="hero__button" onClick={orderNow} data-aos="fade-down" data-aos-duration="3000">Order Now</button> 
  </section>
  )
}

export default Hero;