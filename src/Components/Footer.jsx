import React from 'react';
import { Link } from 'react-router-dom';

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
                alt="JRD logo"
                style={{ width: '150px', height: '152px' }}
              />
              <p>JRD est un modèle de commerce électronique polyvalent. Ceci est un exercice de construction d'un site de ecommerce avec React pour la partie frontend.</p>
              <ul>
                <li><i className="fa fa-phone" /><span>0788399537</span></li>
                <li><i className="fa fa-envelope-open" /><span>jderimer@gmail.com</span></li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Information</h6>
              <ul>
                <li><Link to="/About" aria-label="En savoir plus sur nous">À propos</Link></li>
                <li><Link to="/Contact" aria-label="Nous contacter">Nous contacter</Link></li>
                <li><Link to="/Blog_list" aria-label="Lire nos articles de blog">Blog</Link></li>
                <li>
                  <a href="https://derimer.github.io/portfolio_3d/" target="_blank" rel="noopener noreferrer" aria-label="Voir mon portfolio">
                    Portfolio
                  </a>
                </li>
                <li><Link to="/login_register" aria-label="Se connecter ou s'inscrire">Mon compte</Link></li>
                <li><Link to="/checkout" aria-label="Voir vos souhaits">Vos souhaits</Link></li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Liens utiles</h6>
              <ul>
                <li><Link to="/login_register" aria-label="Consulter la politique de confidentialité">Politique de confidentialité</Link></li>
                <li><Link to="/checkout" aria-label="Suivi de votre livraison">Suivi de livraison</Link></li>
                <li><Link to="/Contact" aria-label="Lire les termes et conditions">Termes & Conditions</Link></li>
                <li><Link to="/Cart" aria-label="Voir votre panier">Panier</Link></li>
                <li><Link to="/checkout" aria-label="Vérifier la commande">Vérifiez</Link></li>
                <li><Link to="/login_register" aria-label="Se connecter ou s'inscrire">Mon compte</Link></li>
                <li><Link to="/checkout" aria-label="Suivi de votre commande">Suivi de commande</Link></li>
              </ul>
            </div>
            <div className="footer-widget col-sm-4 col-md-4 col-lg-2 col-12 mb-lg-0 mb-4">
              <h6 className="footer-widget-title">Nos liens</h6>
              <ul>
                <li><Link to="/product_listing" aria-label="Voir les produits homme">Homme</Link></li>
                <li><Link to="/product_listing" aria-label="Voir les produits femme">Femme</Link></li>
                <li><Link to="/product_listing" aria-label="Voir les produits de mode">Mode</Link></li>
                <li><Link to="/Contact" aria-label="Nous contacter">Nous contacter</Link></li>
                <li><Link to="/product_listing" aria-label="Voir les produits de marque">Marque</Link></li>
                <li><Link to="/product_listing" aria-label="Voir les accessoires">Accessoires</Link></li>
                <li><Link to="/product_listing" aria-label="Voir les produits de beauté">Beauté</Link></li>
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
                  <a href="https://www.facebook.com/jeanrene.derimer.5/?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jean-rene-derimer-4641b2268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fa fa-linkedin-square" />
                  </a>
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
                <a href="https://derimer.github.io/portfolio_3d/" target="_blank" rel="noopener noreferrer" aria-label="Voir mon portfolio">
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
  );
};

export default Footer;
