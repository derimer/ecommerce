import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Section3 = () => {
  return (
    <section className="sec-padding">
      <div className="container">
        <div className="page-head">
          <span className="page-sub-title">Les tendances</span>
          <h2 className="page-title">Produits stars</h2>
        </div>
      </div>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          loop
          items={4}
          margin={18}
          nav={false}
          autoplay={true}
          autoplayHoverPause={true}
          autoplayTimeout={20000}
          dots={false}
        >
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/01/01.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>Chemisiers légers </span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span className="product-price-currency-symbol">€</span>
                    49.99
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                  Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numérique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/12/03.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">sélectionnez une option</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>tee-shirt manches courtes</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <del>
                      <span className="product-price-currency-symbol">€</span>
                      39.99
                    </del>
                    <ins>
                      <span className="product-price-currency-symbol">€</span>
                      39.99
                    </ins>
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numérique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/08/02.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>gilet homme</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">€</span>
                      49.99
                    </span>
                  </span>
                  –
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">€</span>
                      84.99
                    </span>
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/04/02.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>robe femme</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span className="product-price-currency-symbol">€</span>
                    49.99
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numérique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/05/02.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>costume femme</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span className="product-price-currency-symbol">€</span>
                    59.99
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numerique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/06/02.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>ensemble femme</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <del>
                      <span className="product-price-currency-symbol">€</span>
                      79.99
                    </del>
                    <ins>
                      <span className="product-price-currency-symbol">€</span>
                      49.99
                    </ins>
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numérique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/07/02.jpg" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>jogging femme</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span className="product-price-currency-symbol">€</span>
                    49.99
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="item">
            <div className="product-item">
              {/*Product Img*/}
              <div className="product-item-img">
                {/*Image*/}
                <Link className="product-item-img-link" to="/product_detail">
                  <img src="img/products/08/03.png" alt="Product Item" />
                </Link>
                {/*Add to Link*/}
                <div className="add-to-link">
                  <button className="btn btn--primary btn--sm">Sélectionnez une option</button>
                </div>
                {/*Hover Icons*/}
                <div className="hover-product-icon">
                  <div className="product-icon-btn-wrap">
                    <Link
                      to="/product_detail"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Quick View"
                    >
                      <i className="ti-search" />
                    </Link>
                    <Link
                      to="/wishlist"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                    >
                      <i className="ti-heart" />
                    </Link>
                    <Link
                      to="/compare"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Compare"
                    >
                      <i className="ti-reload" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Product Content*/}
              <div className="product-item-content">
                <div className="tag">
                  <Link to="/category/minimal">Minimal</Link>
                </div>
                <Link to="/product_detail" className="product-item-title">
                  <span>ensemble costume homme chic</span>
                </Link>
                <p className="product-item-price">
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">€</span>
                      149.99
                    </span>
                  </span>
                  –
                  <span className="product-price-amount">
                    <span>
                      <span className="product-price-currency-symbol">€</span>
                      94.99
                    </span>
                  </span>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    title="Rated 4 out of 5"
                  >
                    <span style={{ width: "60%" }} />
                  </div>
                  <Link to="/reviews" className="product-rating-count">
                    <span className="count">3</span> Reviews
                  </Link>
                </div>
                <p className="product-description">
                Un imprimeur inconnu a rassemblé une série de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage au numérique, restant pratiquement inchangé.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Section3;