import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const About = () => {
  return (
    <div>
        
        <Header />
 <div className="page-contaiter">
  {/*Breadcrumb*/}
  <section className="breadcrumb">
    <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} />
    <div className="breadcrumb-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="breadcrumb-title">A propos</h1>
            <nav className="breadcrumb-link">
              <span><a href="/">Accueil</a></span>
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
            <p className="large">JRD boutique est un modèle HTML premium conçu et développé de A à Z pour vous aider à créer un site web époustouflant, élégant et convivial qui boostera vos ventes.

</p>
            <p className="color--dark text--bold">Le pack de création de thème comprend un ensemble complet de thèmes e-commerce pour votre boutique en ligne, selon vos envies. Il comprend tous les thèmes e-commerce nécessaires à la réussite de votre site.</p>
            <a href="/" className="btn btn--primary space-t--1">voir les offres</a>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-6">
          <img src="img/categories/collection_006.jpg" alt="liste des categories" />
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
      <OwlCarousel className='owl-theme' loop items={4} margin={18} nav={false} autoplay={true} autoplayHoverPause={true} autoplayTimeout={2000} dots={false}>

        {/*Item*/}
        <div className="item">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <a className="product-item-img-link">
                <img src="img/products/10/01.jpg" alt="chemise homme" />
              </a>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Facebook">
                    <i className="ti-facebook" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Twitter">
                    <i className="ti-twitter" />
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Google">
                    <i className="ti-google" />
                  </a>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="product-item-title"><span>Mariam Phegley</span></div>
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
              <a className="product-item-img-link">
                <img src="img/products/11/01.jpg" alt="polo homme" />
              </a>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Facebook">
                    <i className="ti-facebook" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Twitter">
                    <i className="ti-twitter" />
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Google">
                    <i className="ti-google" />
                  </a>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="product-item-title"><span>Logan Villeda</span></div>
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
              <a className="product-item-img-link">
                <img src="img/products/12/01.jpg" alt="Product Item" />
              </a>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Facebook">
                    <i className="ti-facebook" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Twitter">
                    <i className="ti-twitter" />
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Google">
                    <i className="ti-google" />
                  </a>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="product-item-title"><span>Joana Soltis</span></div>
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
              <a className="product-item-img-link">
                <img src="img/products/13/01.jpg" alt="Product Item" />
              </a>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Facebook">
                    <i className="ti-facebook" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Twitter">
                    <i className="ti-twitter" />
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="left" title="Google">
                    <i className="ti-google" />
                  </a>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="product-item-title"><span>Francie Maris</span></div>
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
        <OwlCarousel className='owl-theme' loop items={1} nav={false} autoplay={true} autoplayHoverPause={true} autoplayTimeout={2000} dots={true}>

            <div className="item">
              <div className="testimonials-item">
                <div className="testimonials-icon"><i className="ti-quote-left" /></div>
                <p className="testimonials-quote">l y a beaucoup d'argent en circulation. On en imprime chaque jour davantage. Mais ce billet, il n'y en a que cinq dans le monde, et c'est tout ce qu'il y aura jamais. Seul un idiot céderait ça pour une monnaie aussi banale. Êtes-vous un idiot ?</p>
                <div className="testimonials-people">
                  <h6 className="testimonials-people-title">Anthony T. Hincks</h6>
                  <span className="testimonials-people-sub_title">(Apple Founder)</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-item">
                <div className="testimonials-icon"><i className="ti-quote-left" /></div>
                <p className="testimonials-quote">« Et si, au lieu de penser à résoudre toute votre vie, vous pensiez simplement à ajouter de bonnes choses. Une à la fois. Laissez votre pile de bonnes choses grandir. »</p>
                <div className="testimonials-people">
                  <h6 className="testimonials-people-title">Nicki Golden</h6>
                  <span className="testimonials-people-sub_title">(Microsoft Ceo)</span>
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
    <OwlCarousel className='owl-theme' loop items={6} nav={false} autoplayHoverPause={true} autoplay={true} autoplayTimeout={2000} dots={false}>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/001.png" alt="smile" />
            </a>
          </div>
        </div>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/002.png" alt="jamie&annie" />
            </a>
          </div>
        </div>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/003.png" alt="mocku" />
            </a>
          </div>
        </div>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/004.png" alt="refresh" />
            </a>
          </div>
        </div>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/005.png" alt="iconic" />
            </a>
          </div>
        </div>
        {/*Item*/}
        <div className="item">
          <div className="brand-item">
            <a>
              <img src="img/brand/006.png" alt="hipster" />
            </a>
          </div>
        </div>
      </OwlCarousel>
    </div>
  </section>
  {/*End Brand Slider*/}
</div>

    <Footer />
    </div>
  )
}

export default About