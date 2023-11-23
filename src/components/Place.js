import React from 'react'
import {useState} from 'react'
import data from "../json/data.json"

const Place = () => {
    const [selectedImage, setSelectedImage] = useState(data.places[0].imageUrl);
  return (
    <section className="place section" id="place">
    <div className="place__container container">
      <h2 className="section__title" data-aos="fade-left" data-aos-duration="1500">
        Make you feels good With <br />
        our special games and reward
      </h2>

      <div className="place__content grid" data-aos="fade-right" data-aos-duration="1500">
        <div className="place__images" >
          <img
            src={selectedImage}
            alt=""
            className="place__img-big"
          />
          <div className="place__img-smalls">
            {data.places.map((place, index) => {
                return(
                <img
                key={index}
                src={place.imageUrl}
                alt=""
                onClick={() => setSelectedImage(place.imageUrl)}
                className={`place__img-small active" ${selectedImage === place.imageUrl && 'active'}`}
              />
                );
            })}
            
          </div>
        </div>

        <div className="place__data">
          <h2 className="place__title">let's play and invite your friends to get prizes</h2>
          <p className="place__description">
          Special rewards for those of you who can win the game,<br />
          in the form of vouchers, fresh products or special prizes.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Place