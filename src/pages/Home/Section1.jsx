import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Section1 = () => {
  return (
    <section id="intro" className="intro">
      {/*Slider Hero*/}
    <OwlCarousel
        className="owl-theme"
        items={1}
        loop
        autoplay={true}
        autoplayTimeout={20000}
        autoplayHoverPause={true}
        dots={true}
        nav={true}
    >
        {/*Item*/}
        <div
          className="item height-9 sm-height-600px"
          data-slide_theme="light-slide"
        >
          <div
            className="background-image"
            data-background="img/bg_img/img_007.jpg"
            style={{backgroundImage:"url('img/bg_img/img_007.jpg')"}}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={0}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle"># Mode femme</p>
                  <h1 className="intro-title">
                    Nouvelle collection femme
                    <br />
                    fait pour elle
                  </h1>
                  <Link to="/product_listing" className="btn btn--primary space--1">
                    Voir les offres
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div
          className="item section-dark height-9 sm-height-600px"
          data-slide_theme="dark-slide"
        >
          <div
            className="background-image"
            data-background="img/bg_img/img_008.jpg"
            style={{backgroundImage:"url('img/bg_img/img_008.jpg')"}}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={1}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 ml-md-auto">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle"># Mode homme</p>
                  <h1 className="intro-title">
                    Nouvelle collection homme 2025
                    <br />
                    &amp; Collection
                  </h1>
                  <Link to="/product_listing" className="btn btn--primary space--1">
                    Voir les offres
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="item height-9 sm-height-600px">
          <div
            className="background-image"
            data-background="img/bg_img/img_003.jpg"
            style={{backgroundImage:"url('img/bg_img/img_003.jpg')"}}
            data-bg-posx="right"
            data-bg-posy="top"
            data-bg-overlay={0}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle">Jusqu'à 50% de réduction</p>
                  <h1 className="intro-title">
                    Nouvelle collection
                    <br />
                    Automne
                  </h1>
                  <Link to="/product_listing" className="btn btn--primary space--1">
                    Voir les offres
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div
          className="item section-dark height-9 sm-height-600px"
          data-slide_theme="dark-slide"
        >
          <div
            className="background-image bg--primary"
            data-background="img/bg_img/img_009.jpg"
            style={{backgroundImage:"url('img/bg_img/img_009.jpg')"}}
            data-bg-posx="center"
            data-bg-posy="top"
            data-bg-overlay={6}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-md-auto">
                <div className="intro-caption intro-caption-middel text-center intro-caption-fade sec-padding--lg">
                  <p className="intro-subtitle">SITE TYPE DEVELOPPE PAR JRD <br/>LES VENTES STARS DE L'ETE</p>
                  <Link to="/product_listing" className="btn btn--white space--1">
                    voir les offres 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/*End Slider Hero*/}
     
    </section>
  );
};

export default Section1;