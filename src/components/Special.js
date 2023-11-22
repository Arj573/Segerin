import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Special = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Adjust the duration as needed
      easing: 'ease-in-out', // Specify the easing function
    });
  }, []);
    return ( 
    <div className="special section container" id="special">
    
    <div className="special__container" >
      <div className="special__box" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="3000">
        <h2 className="section__title" >
          Healthy drink that make you <br />
          happy and cheer you up!
        </h2>
      </div>

      <div className="special__category" data-aos="fade-up-right" data-aos-duration="2000">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/vegetables.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Fresh fruits and vegetables</h3>
          <p className="special__description">
            We select the best fruits and vegetables, for optimal health quality.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/mixing.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Mix your taste</h3>
          <p className="special__description">
          enjoy fruit and vegetables of your choice.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/sugar.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Sweet control</h3>
          <p className="special__description">
          Determine the sweetness level according to what you are interested in.
          </p>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Special;