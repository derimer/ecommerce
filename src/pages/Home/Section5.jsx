import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Section5 = () => {
  return (
    <>
      {/* ...autres sections... */}

      <section className="sec-padding bg--secondary">
        <div className="container">
          <div className="page-head">
            <span className="page-sub-title">Témoignages</span>
            <h2 className="page-title">nos avis clients</h2>
          </div>
        </div>
        {/*Customer Review*/}
        <div className="container-fluid customer-review-section">
          <OwlCarousel
            className="owl-theme"
            loop
            items={6}
            margin={18}
            nav={false}
            autoplay={true}
            autoplayTimeout={3000}
            dots={false}
          >
            <div className="item">
              <div className="review-item">
                <span className="review-author-name">
                  Ronald Dahi
                </span>
                <div className="review-ratting">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <span className="product-rating-count">
                    <span className="count">(3)</span>
                  </span>
                </div>
                <h5 className="review-title">Excellent Produit</h5>
                <p className="review-description">
                  Oui, je suis folle. Bon. Peut-être. Mais je préfère être folle
                  qu'être idiote
                </p>
              </div>
            </div>
            <div className="item">
              <div className="review-item">
                <span className="review-author-name">
                  Logan Villeda
                </span>
                <div className="review-ratting">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "100%" }} />
                  </div>
                  <span className="product-rating-count">
                    <span className="count">(5)</span>
                  </span>
                </div>
                <h5 className="review-title">merveilleux</h5>
                <p className="review-description">Bravo! 👍</p>
              </div>
            </div>
            <div className="item">
              <div className="review-item">
                <span className="review-author-name">
                  Mariam Phegley
                </span>
                <div className="review-ratting">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "100%" }} />
                  </div>
                  <span className="product-rating-count">
                    <span className="count">(5)</span>
                  </span>
                </div>
                <h5 className="review-title">Nous l'adorons. Merci</h5>
                <p className="review-description">
                  Il y a beaucoup d'argent en circulation. On en imprime chaque
                  jour davantage. Mais ce billet, il n'en existe que cinq dans
                  le monde entier{" "}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="review-item">
                <span className="review-author-name">
                  Joana Soltis
                </span>
                <div className="review-ratting">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "100%" }} />
                  </div>
                  <span className="product-rating-count">
                    <span className="count">(5)</span>
                  </span>
                </div>
                <h5 className="review-title">J'aime ce produit</h5>
                <p className="review-description">
                  J'adore donner à mon chien une nourriture saine qu'il adore
                  manger ! Il souffre de graves intolérances alimentaires à la
                  viande rouge et aux produits laitiers !
                </p>
              </div>
            </div>
            <div className="item">
              <div className="review-item">
                <span className="review-author-name">
                  Francie Maris
                </span>
                <div className="review-ratting">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "100%" }} />
                  </div>
                  <span className="product-rating-count">
                    <span className="count">(5)</span>
                  </span>
                </div>
                <h5 className="review-title">Mon produit favori!</h5>
                <p className="review-description">Mon produit favori !</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
        {/*End Customer Review*/}
        {/*Testimonials*/}
        <div className="container customer-testimonials-section">
          <div className="row">
            <div className="col-lg-8 mx-lg-auto">
              <div className="testimonials-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonials-item">
                    <div className="testimonials-icon">
                      <i className="ti-quote-left" />
                    </div>
                    <p className="testimonials-quote">
                      Il y a beaucoup d'argent en circulation. On en imprime
                      chaque jour davantage. Mais ce billet, il n'y en a que
                      cinq dans le monde, et c'est tout ce qu'il y aura jamais.
                      Seul un idiot céderait ça pour une monnaie aussi banale.
                      Êtes-vous un idiot ?
                    </p>
                    <div className="testimonials-people">
                      <h6 className="testimonials-people-title">
                        Anthony T. Hincks
                      </h6>
                      <span className="testimonials-people-sub_title">
                        (Apple Founder)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonials-item">
                    <div className="testimonials-icon">
                      <i className="ti-quote-left" />
                    </div>
                    <p className="testimonials-quote">
                      « Et si, au lieu de penser à résoudre toute votre vie,
                      vous pensiez simplement à ajouter de bonnes choses. Une à
                      la fois. Laissez votre pile de bonnes choses grandir. »
                    </p>
                    <div className="testimonials-people">
                      <h6 className="testimonials-people-title">
                        Nicki Golden
                      </h6>
                      <span className="testimonials-people-sub_title">
                        (Microsoft Ceo)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Testimonials*/}
      </section>
     


      <section className="sec-padding-t">
        <div className="container">
          <div className="page-head">
            <span className="page-sub-title">Nouvelles tendances</span>
            <h2 className="page-title">Dernières nouveautés</h2>
          </div>
        </div>
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            loop
            items={3}
            margin={18}
            nav={false}
            autoplay={true}
            autoplayTimeout={3000}
            dots={false}
          >
            {/*Item*/}
            <div className="item">
              <div className="blog-item">
                <div className="blog-item-image">
                  <Link to="/blog/006" className="blog-img-link">
                    <img src="img/blog_img/006.jpg" alt="blog image1" />
                  </Link>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <span>Fashion</span>
                    <span>Cupple</span>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/blog/006">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculine
                    </Link>
                  </h4>
                  <p className="info">
                    <span>
                      par <span>l'Administrateur</span>
                    </span>
                    <span>23 février 2025</span>
                  </p>
                </div>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="blog-item">
                <div className="blog-item-image">
                  <Link to="/blog/002" className="blog-img-link">
                    <img src="img/blog_img/002.jpg" alt="blog image2" />
                  </Link>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <span>River</span>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/blog/002">
                      Lancement de la collection Été Enfants 2025
                    </Link>
                  </h4>
                  <p className="info">
                    <span>
                      par <span>l'Administrateur</span>
                    </span>
                    <span>15 avril 2024</span>
                  </p>
                </div>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="blog-item">
                <div className="blog-item-image">
                  <Link to="/blog/003" className="blog-img-link">
                    <img src="img/blog_img/003.jpg" alt="blog image3" />
                  </Link>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <span>Femme</span>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/blog/003">Offre à durée limitée </Link>
                  </h4>
                  <p className="info">
                    <span>
                      par <span>l'utilisateur</span>
                    </span>
                    <span>08 mars 2025</span>
                  </p>
                </div>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="blog-item">
                <div className="blog-item-image">
                  <Link to="/blog/004" className="blog-img-link">
                    <img src="img/blog_img/004.jpg" alt="blog image4" />
                  </Link>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <span>Femme</span>
                    <span>Voiture</span>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/blog/004">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculines
                    </Link>
                  </h4>
                  <p className="info">
                    <span>
                      par <span>l'Administrateur</span>
                    </span>
                    <span>31 janvier 2025</span>
                  </p>
                </div>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="blog-item">
                <div className="blog-item-image">
                  <Link to="/blog/005" className="blog-img-link">
                    <img src="img/blog_img/005.jpg" alt="blog image5" />
                  </Link>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <span>Femme</span>
                  </div>
                  <h4 className="blog-title">
                    <Link to="/blog/005">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculine
                    </Link>
                  </h4>
                  <p className="info">
                    <span>
                      par <span> l'Administrateur</span>
                    </span>
                    <span>04 janvier 2025</span>
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="sec-padding">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            loop
            items={6}
            margin={18}
            autoplayHoverPause={true}
            nav={false}
            autoplay={true}
            autoplayTimeout={3000}
            dots={false}
          >
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/001.png" alt="brand" />
                </span>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/002.png" alt="brand" />
                </span>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/003.png" alt="brand" />
                </span>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/004.png" alt="brand" />
                </span>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/005.png" alt="brand" />
                </span>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <span>
                  <img src="img/brand/006.png" alt="brand" />
                </span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Section5;
