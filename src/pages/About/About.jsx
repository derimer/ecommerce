import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="page-contaiter">
        {/*Breadcrumb*/}
        <section className="breadcrumb">
          <div
            className="background-image"
            data-background="img/bg_img/bg_001.jpg"
            data-bg-posx="center"
            data-bg-posy="center"
            data-bg-overlay={4}
          />
          <div className="breadcrumb-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="breadcrumb-title">A propos</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <Link to="/">Accueil</Link>
                    </span>
                    <span>Qui sommes nous</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*About*/}
        <section className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-7 col-lg-6 d-flex mb-sm-5">
                <div className="align-self-center">
                  <h2>Welcome to JRD Store!</h2>
                  <p className="large">
                    JRD Shop est un modèle HTML premium conçu et développé dès le
                    départ dans le but de vous aider à créer un site web étonnant,
                    beau et convivial qui boostera les ventes de vos produits.
                  </p>
                  <p className="color--dark text--bold">
                    Ce pack de design fournit un ensemble complet de thèmes
                    e-commerce pour votre boutique en ligne selon le style que
                    vous souhaitez. Il inclut tous les thèmes nécessaires à la
                    réussite de votre boutique en ligne.
                  </p>
                  <Link
                    to="/product_listing"
                    className="btn btn--primary space-t--1"
                  >
                    Acheter maintenant
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-6">
                <img
                  src="img/categories/collection_006.jpg"
                  alt="Collection"
                />
              </div>
            </div>
          </div>
        </section>
        {/*End About*/}
        {/*Team*/}
        <section className="sec-padding page-divider-tb">
          <div className="container">
            {/*Title*/}
            <div className="page-head">
              <h2 className="page-title">JRD Team Members</h2>
            </div>
            {/*End Title*/}
            {/*Team Slider*/}
            <OwlCarousel
              className="owl-theme"
              loop
              items={4}
              margin={18}
              nav={false}
              autoplay={true}
              autoplayHoverPause={true}
              autoplayTimeout={2000}
              dots={false}
            >
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <span className="product-item-img-link">
                      <img src="img/products/10/01.jpg" alt="Product Item" />
                    </span>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Facebook"
                        >
                          <i className="ti-facebook" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Twitter"
                        >
                          <i className="ti-twitter" />
                        </a>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Google"
                        >
                          <i className="ti-google" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="product-item-title">
                      <span>Mariam Phegley</span>
                    </div>
                    <p className="product-item-price">Manager</p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <span className="product-item-img-link">
                      <img src="img/products/11/01.jpg" alt="Product Item" />
                    </span>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Facebook"
                        >
                          <i className="ti-facebook" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Twitter"
                        >
                          <i className="ti-twitter" />
                        </a>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Google"
                        >
                          <i className="ti-google" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="product-item-title">
                      <span>Logan Villeda</span>
                    </div>
                    <p className="product-item-price">Team Leader</p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <span className="product-item-img-link">
                      <img src="img/products/12/01.jpg" alt="Product Item" />
                    </span>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Facebook"
                        >
                          <i className="ti-facebook" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Twitter"
                        >
                          <i className="ti-twitter" />
                        </a>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Google"
                        >
                          <i className="ti-google" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="product-item-title">
                      <span>Joana Soltis</span>
                    </div>
                    <p className="product-item-price">Designer</p>
                  </div>
                </div>
              </div>
              {/*Item*/}
              <div className="item">
                <div className="product-item">
                  {/*Product Img*/}
                  <div className="product-item-img">
                    {/*Image*/}
                    <span className="product-item-img-link">
                      <img src="img/products/13/01.jpg" alt="Product Item" />
                    </span>
                    {/*Hover Icons*/}
                    <div className="hover-product-icon">
                      <div className="product-icon-btn-wrap">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Facebook"
                        >
                          <i className="ti-facebook" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Twitter"
                        >
                          <i className="ti-twitter" />
                        </a>
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Google"
                        >
                          <i className="ti-google" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*Product Content*/}
                  <div className="product-item-content">
                    <div className="product-item-title">
                      <span>Francie Maris</span>
                    </div>
                    <p className="product-item-price">Chairman</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/*End Team Slider*/}
          </div>
        </section>
        {/*End Team*/}
        {/*Testimonials*/}
        <section className="sec-padding-t">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-lg-auto">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  items={1}
                  nav={false}
                  autoplay={true}
                  autoplayHoverPause={true}
                  autoplayTimeout={2000}
                  dots={true}
                >
                  <div className="item">
                    <div className="testimonials-item">
                      <div className="testimonials-icon">
                        <i className="ti-quote-left" />
                      </div>
                      <p className="testimonials-quote">
                        “There's plenty of money out there. They print more every
                        day. But this ticket, there's only five of them in the
                        whole world, and that's all there's ever going to be. Only
                        a dummy would give this up for something as common money.
                        Are you a dummy?”
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
                        “So, what if, instead of thinking about solving your whole
                        life, you just think about adding additional good things.
                        One at a time. Just let your pile of good things grow”
                      </p>
                      <div className="testimonials-people">
                        <h6 className="testimonials-people-title">Nicki Golden</h6>
                        <span className="testimonials-people-sub_title">
                          (Microsoft Ceo)
                        </span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
        {/*End Testimonials*/}
        {/*Brand Slider*/}
        <section className="sec-padding">
          <div className="container">
            <OwlCarousel
              className="owl-theme"
              loop
              items={6}
              nav={false}
              autoplayHoverPause={true}
              autoplay={true}
              autoplayTimeout={2000}
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
        {/*End Brand Slider*/}
      </div>

      <Footer />
    </div>
  );
};

export default About;