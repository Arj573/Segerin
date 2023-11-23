import React from 'react'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <div class="blog__container container">
          <h2 class="section__title" data-aos="fade-up-right" data-aos-duration="1500">
            Our healthy blogs with <br />
            insightful topic
          </h2>

          <div class="blog__content grid" data-aos="fade-up" data-aos-duration="1500">
            <article class="blog__card">
              <div class="blog__image">
                <img src="./media/blog1.jpg" alt="" class="blog__img" />
                <a href="https://promkes.kemkes.go.id/?p=8855" target="_blank" class="blog__button">
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
                <div class="blog__stats">
                  <div class="blog__reaction">
                    <i class="bx bx-comment"></i>
                    <span>12</span>
                  </div>
                  <div class="blog__reaction">
                    <i class="bx bx-show"></i>
                    <span>76,5k</span>
                  </div>
                </div>
              </div>

              <div class="blog__data">
                <h2 class="blog__title">The importance of eating vegetables and fruit</h2>
                <p class="blog__description">
                Getting a healthy body is not the only benefit of fruit and vegetables that you will get.
                </p>
              </div>
            </article>
            <article class="blog__card">
              <div class="blog__image">
                <img src="./media/blog2.jpg" alt="" class="blog__img" />
                <a href="https://www.cnnindonesia.com/keluarga/20161116133411-436-173018/mau-hidup-sehat-makan-buah-dan-sayur" target="_blank" class="blog__button">
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
                <div class="blog__stats">
                  <div class="blog__reaction">
                    <i class="bx bx-comment"></i>
                    <span>96</span>
                  </div>
                  <div class="blog__reaction">
                    <i class="bx bx-show"></i>
                    <span>356,7k</span>
                  </div>
                </div>
              </div>

              <div class="blog__data">
                <h2 class="blog__title">Want to live healthy? Consume fruit and vegetables.</h2>
                <p class="blog__description">
                An alarming data was shown by the World Health Organization (WHO). Indonesian people, according to WHO, only consume 2.5 portions of fruit and vegetables per day or 34.55 kg per year.
                </p>
              </div>
            </article>
          </div>
          <h2 class="section__title" data-aos="fade-up-right" data-aos-duration="3000">
            Visit our store
          </h2>
          <div class="map__container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.150770350664!2d106.64719227063934!3d-6.223913440587364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a9906e13%3A0xf75c5296d0a385e4!2sUniversitas%20Bina%20Nusantara%20(BINUS)%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1700613043518!5m2!1sid!2sid" class = "map" allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
      </section>
  )
}

export default Blog