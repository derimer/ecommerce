import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Section5 = () => {
  return (
    <>

<div className="container customer-testimonials-section">
  <div className="row">
    <div className="col-lg-8 mx-lg-auto">
      <div className="testimonials-slider owl-carousel owl-theme">
        <div className="item">
          <div className="testimonials-item">
            <div className="testimonials-icon"><i className="ti-quote-left" /></div>
            <p className="testimonials-quote">“There's plenty of money out there. They print more every day. But this ticket, there's only five of them in the whole world, and that's all there's ever going to be. Only a dummy would give this up for something as common money. Are you a dummy?”</p>
            <div className="testimonials-people">
              <h6 className="testimonials-people-title">Anthony T. Hincks</h6>
              <span className="testimonials-people-sub_title">(Apple Founder)</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonials-item">
            <div className="testimonials-icon"><i className="ti-quote-left" /></div>
            <p className="testimonials-quote">“So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow”</p>
            <div className="testimonials-people">
              <h6 className="testimonials-people-title">Nicki Golden</h6>
              <span className="testimonials-people-sub_title">(Microsoft Ceo)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
                <a href="#" className="review-author-name">
                  Ronald Dahi
                </a>
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
                  <a href="#" className="product-rating-count">
                    <span className="count">(3)</span>
                  </a>
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
                <a href="#" className="review-author-name">
                  Logan Villeda
                </a>
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
                  <a href="#" className="product-rating-count">
                    <span className="count">(5)</span>
                  </a>
                </div>
                <h5 className="review-title">merveilleux</h5>
                <p className="review-description">Bravo! 👍</p>
              </div>
            </div>
            <div className="item">
              <div className="review-item">
                <a href="#" className="review-author-name">
                  Mariam Phegley
                </a>
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
                  <a href="#" className="product-rating-count">
                    <span className="count">(5)</span>
                  </a>
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
                <a href="#" className="review-author-name">
                  Joana Soltis
                </a>
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
                  <a href="#" className="product-rating-count">
                    <span className="count">(5)</span>
                  </a>
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
                <a href="#" className="review-author-name">
                  Francie Maris
                </a>
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
                  <a href="#" className="product-rating-count">
                    <span className="count">(5)</span>
                  </a>
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
            <h2 className="page-title">Dernières nouvelles</h2>
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
                  <a href="blog_single.html" className="blog-img-link">
                    <img src="img/blog_img/001.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <a href="#">Fashion</a>
                    <a href="#">Cupple</a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog_single.html">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculine
                    </a>
                  </h4>
                  <p className="info">
                    <span>
                      par <a href="#">l'Administrateur</a>
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
                  <a href="blog_single.html" className="blog-img-link">
                    <img src="img/blog_img/002.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <a href="#">River</a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog_single.html">
                      Lancement de la collection Été Enfants 2025
                    </a>
                  </h4>
                  <p className="info">
                    <span>
                      par <a href="#">l'Administrateur</a>
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
                  <a href="blog_single.html" className="blog-img-link">
                    <img src="img/blog_img/003.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <a href="#">Femme</a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog_single.html">Offre à durée limitée </a>
                  </h4>
                  <p className="info">
                    <span>
                      par <a href="#">l'utilisateur</a>
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
                  <a href="blog_single.html" className="blog-img-link">
                    <img src="img/blog_img/004.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <a href="#">Femme</a>
                    <a href="#">Voiture</a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog_single.html">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculines
                    </a>
                  </h4>
                  <p className="info">
                    <span>
                      par <a href="#">l'Administrateur</a>
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
                  <a href="blog_single.html" className="blog-img-link">
                    <img src="img/blog_img/005.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-item-content">
                  <div className="tag">
                    <a href="#">Femme</a>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog_single.html">
                      Des moyens efficaces pour surmonter les problèmes de mode
                      masculine
                    </a>
                  </h4>
                  <p className="info">
                    <span>
                      par <a href="#"> l'Administrateur</a>
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
                <a>
                  <img src="img/brand/001.png" alt="brand" />
                </a>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <a>
                  <img src="img/brand/002.png" alt="brand" />
                </a>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <a>
                  <img src="img/brand/003.png" alt="brand" />
                </a>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <a>
                  <img src="img/brand/004.png" alt="brand" />
                </a>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <a>
                  <img src="img/brand/005.png" alt="brand" />
                </a>
              </div>
            </div>
            {/*Item*/}
            <div className="item">
              <div className="brand-item">
                <a>
                  <img src="img/brand/006.png" alt="brand" />
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Section5;
