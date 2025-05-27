import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import du composant Link

const Header = () => {
  const [activemenu, setactivemenu] = useState("");
  const [mobileordesktop, setmobileordesktop] = useState(false);

  return (
    <header
      id="header"
      className="header header--sticky"
      data-header-hover="true"
    >
     
      {/*Header Navigation*/}
      <nav id="navigation" className="header-nav">
        <div className="container-fluid">
          <div className="row">
            {/*Logo*/}
            <div className="site-logo">
              <Link to="/Home"> {/* Lien vers Home.jsx */}
                <img src="img/jrd.png" className="logo-dark" alt="JRD" />
                <img src="img/jrd.png" className="logo-light" alt="JRD" />
              </Link>
               <h1 className="stamp">Vintage Fashion Senior</h1>
            </div>
            {/*End Logo*/}

            {/*Navigation Menu*/}
            <div
              className={
                mobileordesktop === true
                  ? "nav-menu show-on-mobile"
                  : "nav-menu"
              }
            >
              <ul>
                <li className="nav-menu-item">
                  <Link to="/">Accueil</Link> {/* Lien vers la page d'accueil */}
                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/Home"> {/* Lien vers Home.jsx */}
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/home_02">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/home_03">
                              <img
                                src="img/banner/themeshots/shot_home03.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 03</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/home_04">
                              <img
                                src="img/banner/themeshots/shot_home04.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 04</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/home_05">
                              <img
                                src="img/banner/themeshots/shot_home05.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 05</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <Link to="/home_06">
                              <img
                                src="img/banner/themeshots/shot_home06.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 06</figure>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <Link
                    to="/product_listing"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Shop" ? "block" : "none");
                    }}
                  >
                    Boutique
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Shop");
                    }}
                    style={{
                      display: activemenu === "Shop" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                                All Collection
                              </span>
                            </li>
                            <li>
                              <Link to="/product_listing">Nouvelle arrivage</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Notre stock</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Robes</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">pentalons &amp; Chinos</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Tops &amp; Tees</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Shirt</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Sweatshirts</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Sweats</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                               Mode femmme
                              </span>
                            </li>
                            <li>
                              <Link to="/product_listing">Ethnic Wear</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Sarees</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Dress Material</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Kurtis</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Saree Combo</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Tops &amp; Tunics</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Dresses</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Tees &amp; Polo</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <span className="dropdown-title">
                               Mode homme
                              </span>
                            </li>
                            <li>
                              <Link to="/product_listing">T-shirts</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Kurtas, Pyjamas &amp; Dhotis</Link>
                            </li>
                            <li>
                              <Link to="/product_listing">Shorts &amp; Three-Fourths</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Shirts</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Top &amp; Bottom Sets</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Ride On &amp; Scooters</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Electronic Toys</Link>
                            </li>
                            <li>
                              <Link to="product_listing">Soft Toys</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="#">
                                <img
                                  src="img/banner/nav_banner01.jpg"
                                  alt="banner"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link
                    to="#"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Man");
                    }}
                  >
                   Homme
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col2-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Man");
                    }}
                    style={{
                      display: activemenu === "Man" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Collection</span>
                          </li>
                          <li>
                            <Link to="#">New In clothing</Link>
                          </li>
                          <li>
                            <Link to="#">New In Footwear</Link>
                          </li>
                          <li>
                            <Link to="#">New In Bags</Link>
                          </li>
                          <li>
                            <Link to="#">New In Watches</Link>
                          </li>
                          <li>
                            <Link to="#">Shirt</Link>
                          </li>
                          <li>
                            <Link to="#">Jeans</Link>
                          </li>
                          <li>
                            <Link to="#">Casual Trousers</Link>
                          </li>
                          <li>
                            <Link to="#">Suits &amp; Blazers</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Watches</span>
                          </li>
                          <li>
                            <Link to="#">Analog</Link>
                          </li>
                          <li>
                            <Link to="#">Chronograph</Link>
                          </li>
                          <li>
                            <Link to="#">Digital</Link>
                          </li>
                          <li>
                            <Link to="#">Watch Cases</Link>
                          </li>
                          <li>
                            <Link to="#">Shoes</Link>
                          </li>
                          <li>
                            <Link to="#">Lether Wallets</Link>
                          </li>
                          <li>
                            <Link to="#">Belts</Link>
                          </li>
                          <li>
                            <Link to="#">Accesoires</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link
                    to="#"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                  >
                   Femme
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown col3-dropdown center"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Women");
                    }}
                    style={{
                      display: activemenu === "Women" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Collection</span>
                          </li>
                          <li>
                            <Link to="#">Back In Stock Clothes</Link>
                          </li>
                          <li>
                            <Link to="#">Dresses</Link>
                          </li>
                          <li>
                            <Link to="#">Tops &amp; Tees</Link>
                          </li>
                          <li>
                            <Link to="#">Sweatshirts</Link>
                          </li>
                          <li>
                            <Link to="#">Sweaters </Link>
                          </li>
                          <li>
                            <Link to="#">Kimonos</Link>
                          </li>
                          <li>
                            <Link to="#">Jackets</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">
                              Beauty &amp; Wellness
                            </span>
                          </li>
                          <li>
                            <Link to="#">All Wellness</Link>
                          </li>
                          <li>
                            <Link to="#">Makeup</Link>
                          </li>
                          <li>
                            <Link to="#">Skincare</Link>
                          </li>
                          <li>
                            <Link to="#">Body</Link>
                          </li>
                          <li>
                            <Link to="#">Sun Care</Link>
                          </li>
                          <li>
                            <Link to="#">Hair</Link>
                          </li>
                          <li>
                            <Link to="#">Aromatherapy</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul>
                          <li>
                            <span className="dropdown-title">Accessoires</span>
                          </li>
                          <li>
                            <Link to="#">New Accesories</Link>
                          </li>
                          <li>
                            <Link to="#">Jewelry</Link>
                          </li>
                          <li>
                            <Link to="#">Bags</Link>
                          </li>
                          <li>
                            <Link to="#">Hats</Link>
                          </li>
                          <li>
                            <Link to="#">Sunglasses</Link>
                          </li>
                          <li>
                            <Link to="#">Scarves</Link>
                          </li>
                          <li>
                            <Link to="#">Belts</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <Link
                    to="#"
                    className="sale-color"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Sale");
                    }}
                  >
                    vente
                  </Link>
                  {/*Dropdown*/}
                  <div
                    className="nav-dropdown mega-dropdown"
                    onMouseLeave={() => {
                      setactivemenu("");
                    }}
                    onMouseEnter={() => {
                      setactivemenu("Sale");
                    }}
                    style={{
                      display: activemenu === "Sale" ? "block" : "none",
                      opacity: 1,
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="#">New Sale</Link>
                            </li>
                            <li>
                              <Link to="#">All Sale</Link>
                            </li>
                            <li>
                              <Link to="#">Featured Sale</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Dresses</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Tops</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Sweaters</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="#">Sale Jackets &amp; Outerwear </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Bottoms</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Intimates</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Accessories</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Shoes</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Bags</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="#">Sale Beauty &amp; Wellness</Link>
                            </li>
                            <li>
                              <Link to="#">Sale FP Movement</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Swim</Link>
                            </li>
                            <li>
                              <Link to="#">
                                Sale FP Beach &amp; Endless Summer{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $19.95</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Sport</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                              <Link to="#">Sale Under $29.95 </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $49.95 </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $59.95 </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $69.95</Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $89.95 </Link>
                            </li>
                            <li>
                              <Link to="#">Sale Under $99.95 </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link to="/blog_list">Blog</Link>
                  {/*Dropdown*/}
                  <div className="nav-dropdown">
                    <ul>
                      <li className="nav-menu-item">
                        <Link to="#">Blog Grid</Link>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <Link to="blog_grid-2_col">2 column</Link>
                          </li>
                          <li>
                            <Link to="blog_grid-3_col">3 column</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="blog_masonry">Masonry</Link>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="#">List</Link>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <Link to="blog_list">List 1</Link>
                          </li>
                          <li>
                            <Link to="blog_list-sidebar_right">
                              List 2 - With Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="blog_single">Blog Single</Link>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="#">Submenu Right</Link>
                        <ul className="nav-dropdown-sub">
                          <li>
                            <Link to="#">Submenu 1</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 2</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 3</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 4</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-menu-item">
                        <Link to="#">Submenu left</Link>
                        <ul className="nav-dropdown-sub left">
                          <li>
                            <Link to="#">Submenu 1</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 2</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 3</Link>
                          </li>
                          <li>
                            <Link to="#">Submenu 4</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <Link to="#">Pages</Link>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col2-dropdown left">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Shop</span>
                          </li>
                          <li>
                            <Link to="product_listing">
                              Shop List - Sidebar Left
                            </Link>
                          </li>
                          <li>
                            <Link to="product_listing-right_sidebar">
                              Shop List - Sidebar Right
                            </Link>
                          </li>
                          <li>
                            <Link to="product_listing-no_sidebar">
                              Shop List - No Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="product_detail">Product Detail 1</Link>
                          </li>
                          <li>
                            <Link to="product_detail_2">Product Detail 2</Link>
                          </li>
                          <li>
                            <Link to="product_detail_3">Product Detail 3</Link>
                          </li>
                          <li>
                            <Link to="product_detail_4">Product Detail 4</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Elements</span>
                          </li>
                          <li>
                            <Link to="ele_accordian">Accordian</Link>
                          </li>
                          <li>
                            <Link to="ele_tabs">Tabs</Link>
                          </li>
                          <li>
                            <Link to="ele_sliders">Sliders</Link>
                          </li>
                          <li>
                            <Link to="ele_typography">Typography</Link>
                          </li>
                          <li>
                            <Link to="ele_btn-and-form">
                              Buttons &amp; Form
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li>
                            <span className="dropdown-title">Portfolio</span>
                          </li>
                          <li>
                            <Link to="portfolio_grid">Portfolio Grid</Link>
                          </li>
                          <li>
                            <Link to="portfolio_masonry">
                              Portfolio Masonry
                            </Link>
                          </li>
                          <li>
                            <Link to="portfolio_single">Portfolio Single</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="dropdown-title">Extra Pages</span>
                          </li>
                          <li>
                            <Link to="cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="login_register">
                              Login &amp; Register
                            </Link>
                          </li>
                          <li>
                            <Link to="about">About</Link>
                          </li>
                          <li>
                            <Link to="contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="comming_soon">Comming Soon</Link>
                          </li>
                          <li>
                            <Link to="error_page">Error 404</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*End Navigation Menu*/}

            {/*Nav Icons*/}
            <div className="nav-icons">
              <ul>
                <li className="nav-icon-item d-lg-none">
                  <div
                    className={
                      mobileordesktop === true
                        ? "nav-icon-trigger menu-mobile-btn active"
                        : "nav-icon-trigger menu-mobile-btn"
                    }
                    onClick={() => {
                      setmobileordesktop(!mobileordesktop);
                    }}
                    title="Navigation Menu"
                  >
                    <span>
                      <i className="ti-menu" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger search-menu-btn"
                    title="Search"
                  >
                    <span>
                      <i className="ti-search" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item d-none d-lg-table-cell">
                  <Link to="/wishlist" className="nav-icon-trigger" title="Wishlist">
                    <span>
                      <i className="ti-heart" />
                      <span className="nav-icon-count">0</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-icon-item">
                  <Link to="/cart" className="nav-icon-trigger" title="Shopping Cart">
                    <span>
                      <i className="ti-bag" />
                      <span className="nav-icon-count">3</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-icon-item">
                  <Link to="/login_register" className="nav-icon-trigger" title="User Account">
                    <span>
                      <i className="ti-user" />
                    </span>
                  </Link>
                  {/*Dropdown*/}
                  <div className="dropdown--menu dropdown--right">
                    <ul>
                      <li>
                        <Link to="/login_register">My Account</Link>
                      </li>
                      <li>
                        <Link to="#">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="#">Compare</Link>
                      </li>
                      <li>
                        <Link to="#">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="#">Lost Password</Link>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="btn btn--primary btn--sm btn--full"
                        >
                          <i className="fa fa-shopping-cart" />
                          Purchase Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Dropdown*/}
                </li>
              </ul>
            </div>
            {/*End Nav Icons*/}
            {/*Search Bar*/}
            <div className="searchbar-menu">
              <div className="searchbar-menu-inner">
                {/*Search Bar*/}
                <div className="search-form-wrap">
                  <form>
                    <button className="search-icon btn--lg">
                      <i className="ti-search" />
                    </button>
                    <input
                      className="search-field input--lg"
                      placeholder="Search here..."
                      defaultValue
                      name="s"
                      title="Search..."
                      type="search"
                      autoComplete="off"
                    />
                    <span className="search-close-icon">
                      <i className="ti-close" />
                    </span>
                  </form>
                </div>
                {/*End Search Bar*/}
                {/*Search Result Bar*/}
                <div className="search-results-wrap">
                  <div className="search-results-loading">
                    <span className="fa fa-spinner fa-spin" />
                  </div>
                  <div className="search-results-text woocommerce">
                    <ul>
                      <li>Nothing found</li>
                    </ul>
                  </div>
                </div>
                {/*End Search Result Bar*/}
              </div>
            </div>
            {/*End Search Bar*/}
          </div>
        </div>
      </nav>
      {/*End Header Navigation*/}
    </header>
  );
};

export default Header;
