import React from 'react'

const Footer = () => {
  return (
   <footer className="footer bg--dark">
  <section className="footer-widget-area">
    <div className="container">
      <div className="row">
        <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-4 pr-lg-4">
          <img
            className="footer-logo mb-4"
            src="img/jrd.png"
            alt="jrd"
            style={{ width: '150px', height: '152px' }} // Ajustez la largeur selon vos besoins
          />
          <p>JRD est un modèle de commerce électronique polyvalent. Ceci est un exercice de construction d un site de ecommerce avec react pour la partie frontend.</p>
          <ul>
            <li><i className="fa fa-phone" /><span>0788399537</span></li>
            <li><i className="fa fa-envelope-open" /><span>jderimer@gmail.com</span></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">Information</h6>
          <ul>
            <li><a href="/About">A propos</a></li>
            <li><a href="/Contact">Nous contacter</a></li>
            <li><a href="/Blog_list">Blog</a></li>
            <a href="https://derimer.github.io/portfolio_3d/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <li><a href="/login_register">Mon compte</a></li>
            <li><a href="/checkout">Vos souhaits</a></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">liens utiles</h6>
          <ul>
            <li><a href="/login_register">Politique de confidentialité</a></li>
            <li><a href="/checkout">Suivi de livraison</a></li>
            <li><a href="/Contact">Termes &amp; Conditions</a></li>
            <li><a href="/Cart">Panier</a></li>
            <li><a href="/checkout">Verifiez</a></li>
            <li><a href="login_register">Mon compte</a></li>
            <li><a href="/checkout">Suivi de commande</a></li>
          </ul>
        </div>
        <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
          <h6 className="footer-widget-title">Nos liens</h6>
          <ul>
            <li><a href="/product_listing">Homme</a></li>
            <li><a href="/product_listing">Femme</a></li>
            <li><a href="/product_listing">Mode</a></li>
            <li><a href="/Contact">Nous contacter</a></li>
            <li><a href="/product_listing">Marque</a></li>
            <li><a href="/product_listing">Accessoires</a></li>
            <li><a href="/product_listing">Beauté</a></li>
          </ul>
        </div>
        <div className="footer-widget col-lg-3 col-12 mb-lg-0 mb-3">
          <h6 className="footer-widget-title">Inscrivez-vous à la newsletter</h6>
          <form className="pt-2">
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles, annonces et offres spéciales</p>
            <div className="form-field-wrapper">
              <input className="newsletter-input form-full" placeholder="Email Address" type="email" />
              <button className="newsletter-btn btn btn--primary" type="submit">Go</button>
            </div>
          </form>
          <ul className="social">
            
            <li>
              <a href="https://www.facebook.com/jeanrene.derimer.5/?locale=fr_FR"target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
            </li>
           
            <li>
              <a href="https://www.linkedin.com/in/jean-rene-derimer-4641b2268/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="footer-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-left">
          <p className="footer-copyright">
            © 2025 JRD Shop, Template by{" "}
            <a href="https://derimer.github.io/portfolio_3d/" target="_blank" rel="noopener noreferrer">
              Derimer Portfolio
            </a>
          </p>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <img src="img/payment_logos.png" alt="payment logos" />
        </div>
      </div>
    </div>
  </section>
</footer>


  )
}

export default Footer
