import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Blog = () => {
  return (
    <>
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
                  <h1 className="breadcrumb-title">Blog </h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <Link to="/Home">Accueil</Link> {/* Lien vers Home.jsx */}
                    </span>
                    <span>Blog</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding">
          <div id="blog-entry" className="blog-entry blog-list">
            <div className="container">
              <div className="row">
                {/*Item*/}
                <div className="col-md-8 offset-md-2">
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/001.jpg" alt="Fashionable couple" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">Couple</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">redécouvrir la mode masculine</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 Avril 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/002.jpg" alt="blog image0" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">enfant</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">Redécouvrir la mode enfant</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/003.jpg" alt="blog image1" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">femme</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">le bonheur d'etre une femme</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 Avril 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/004.jpg" alt="blog image2" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">Couple</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">La vie au grand air</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 Avril 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/002.jpg" alt="blog image3" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">vacances</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">Le plaisir des vacances</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 AVRIL 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/005.jpg" alt="blog image6" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">femme</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">etre une femme active</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 Avril 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <Link className="blog-img-link" to="/blog_single">
                        <img src="img/blog_img/001.jpg" alt="blog image5" />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <Link to="/product_listing">Fashion</Link>
                        <Link to="/product_listing">Couple</Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog_single">la mode est pour nous</Link>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <Link to="/author/admin">Admin</Link>
                        </span>
                        <span>23 Avril 2025</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Content*/}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
