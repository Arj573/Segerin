const Product = () => {
  return (
    <section className="products section" id="products">
        <div className="products__container container">
          <h2 className="section__title">
            Find delicious food and <br />
            choose what you love
          </h2>

          <ul className="products__filters">
            <li
              className="products__item products__line active-product"
              data-filter=".delicacies"
            >
              <h3 className="products__title">Main Menu</h3>
              <span className="products__stock">3 products</span>
            </li>
            <li className="products__item products__line" data-filter=".coffee">
              <h3 className="products__title">Coffee</h3>
              <span className="products__stock">4 products</span>
            </li>
            <li className="products__item" data-filter=".cake">
              <h3 className="products__title">Desserts</h3>
              <span className="products__stock">4 products</span>
            </li>
          </ul>

          <div className="products__content grid">
            <article className="products__card main-menu">
              <div className="products__shape">
                <img
                  src="./media/main-menu1.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$5</h2>
                <h3 className="products__name">Cookies</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card main-menu">
              <div className="products__shape">
                <img
                  src="./media/main-menu2.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$6</h2>
                <h3 className="products__name">Croissant</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card main-menu">
              <div className="products__shape">
                <img
                  src="./media/main-menu3.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$4</h2>
                <h3 className="products__name">Croissant</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card main-menu">
              <div className="products__shape">
                <img
                  src="./media/main-menu4.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$4</h2>
                <h3 className="products__name">Croissant</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card coffee">
              <div className="products__shape">
                <img
                  src="./media/coffee.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$7</h2>
                <h3 className="products__name">Black Coffee</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card coffee">
              <div className="products__shape">
                <img
                  src="./media/coffee2.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$12</h2>
                <h3 className="products__name">Pure Coffee</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card coffee">
              <div className="products__shape">
                <img
                  src="./media/coffee3.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$9</h2>
                <h3 className="products__name">Milk Coffee</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card dessert">
              <div className="products__shape">
                <img
                  src="./media/dessert1.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$6</h2>
                <h3 className="products__name">Cream dessert</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card dessert">
              <div className="products__shape">
                <img
                  src="./media/dessert2.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$5</h2>
                <h3 className="products__name">Chocolate Croissant</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card dessert">
              <div className="products__shape">
                <img
                  src="./media/dessert3.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$15</h2>
                <h3 className="products__name">Pandessert</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
            <article className="products__card dessert">
              <div className="products__shape">
                <img
                  src="./media/dessert4.jpg"
                  alt=""
                  className="products__img"
                />
              </div>
              <div className="products__data">
                <h2 className="products__price">$12</h2>
                <h3 className="products__name">Milk dessert</h3>

                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
  )
}

export default Product