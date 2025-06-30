import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Blogsingle = () => {
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
                  <h1 className="breadcrumb-title">Blog</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Accueil</a>
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
          <div
            id="blog-entry"
            className="blog-entry blog-single blog-single-style1"
          >
            <div className="container">
              <div className="row">
                {/*Left Col*/}
                <div className="col-md-8 col-lg-9 pr-lg-5 mb-sm-5">
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <span className="blog-img-link">
                        <img src="img/blog_img/001.jpg" alt="blog" />
                      </span>
                    </div>
                    <div className="blog-item-content">
                      <p className="info">
                        <span>
                          by <span style={{fontWeight: 500}}>Admin</span>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                      <h2 className="blog-title">
                        et si l'on recréait la mode homme
                      </h2>
                      <div className="blog-description-content">
                        <p>
                          Il est établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il examinera sa mise en page. L'intérêt du Lorem Ipsum réside dans sa distribution plus ou moins normale des lettres, contrairement à l'utilisation de « Contenu ici, contenu ici », ce qui donne un rendu lisible en anglais. De nombreux logiciels de PAO et éditeurs de pages web utilisent désormais le Lorem Ipsum comme modèle de texte par défaut, et une recherche sur « lorem ipsum » permet de découvrir de nombreux sites web encore balbutiants. Différentes versions ont évolué au fil des ans, parfois par accident, parfois volontairement (avec une touche d'humour, etc.).
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <blockquote>
                          <p>
                            "Praesent bibendum risus pellentesque faucibus
                            rhoncus. Etiam a mollis odio. Integer urna nisl,
                            fermentum eu mollis et, gravida eu elit. Duis
                            pharetra ornare placerat."
                          </p>
                          <cite>
                            – Nicki Golden <span>(Fashion Designer)</span>
                          </cite>
                        </blockquote>
                        <p>
                          Il est établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il examinera sa mise en page. L'intérêt du Lorem Ipsum réside dans sa distribution plus ou moins normale des lettres, contrairement à l'utilisation de « Contenu ici, contenu ici », ce qui donne un rendu lisible en anglais. De nombreux logiciels de PAO et éditeurs de pages web utilisent désormais le Lorem Ipsum comme modèle de texte par défaut, et une recherche sur « lorem ipsum » permet de découvrir de nombreux sites web encore balbutiants. Différentes versions ont évolué au fil des ans.
                        </p>
                        <br />
                        <h3>Fashion Photography Gallary</h3>
                        <div className="row post-content-gallary mfp-gallery-popup">
                          <figure
                            className="col post-content-gallary mfp-gallery-popup-link"
                            data-mfp-src="img/blog_img/003.jpg"
                          >
                            <img src="img/blog_img/003.jpg" alt="gallery1" />
                          </figure>
                          <figure
                            className="col post-content-gallary mfp-gallery-popup-link"
                            data-mfp-src="img/blog_img/005.jpg"
                          >
                            <img src="img/blog_img/005.jpg" alt="gallery2" />
                          </figure>
                        </div>
                      </div>
                      <footer className="post-entry-meta-footer">
                        <div className="cat-tags-links">
                          <p>
                            <span>
                              <i className="fa fa-tags left" />
                              Categories:{" "}
                            </span>
                            <span>
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Fashion</button>,{" "}
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Lifestyle</button>,{" "}
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Store</button>,{" "}
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Trends</button>
                            </span>
                          </p>
                        </div>
                      </footer>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Comment Area*/}
                  <div className="comments-area clearfix">
                    {/*Comments*/}
                    <div className="comments">
                      <h3 className="review-title">Comments</h3>
                      <ul className="commentlist">
                        {/*Item*/}
                        <li className="comment-item">
                          <img
                            className="avtar"
                            src="img/avtar.jpg"
                            alt="avtar"
                          />
                          <div className="comment-text">
                            <p className="meta">
                              <strong>James Koster</strong>
                              <span>–</span>
                              <time dateTime="2018-08-21">August 21, 2018</time>
                            </p>
                            <div className="description">
                              <p>
                                when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                                It has survived not only five centuries
                              </p>
                            </div>
                            <button type="button" className="comment-reply-link btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>
                              <i className="fa fa-reply left" />
                              Reply
                            </button>
                          </div>
                        </li>
                        {/*Item*/}
                        <li className="comment-item">
                          <img
                            className="avtar"
                            src="img/avtar.jpg"
                            alt="avtar"
                          />
                          <div className="comment-text">
                            <p className="meta">
                              <strong>Michel</strong>
                              <span>–</span>
                              <time dateTime="2024-08-21">21 Aout 2024</time>
                            </p>
                            <div className="description">
                              <p>Wow Special!</p>
                            </div>
                            <button type="button" className="comment-reply-link btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>
                              <i className="fa fa-reply left" />
                              Reply
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*Comment Form*/}
                    <div className="comment-respond">
                      <h3 className="review-title">laisser une réponse</h3>
                      <form id="comment-form" className="row comment-form">
                        <div className="col-sm-4 form-field-wrapper">
                          <label htmlFor="author">
                            Nom<span className="required">*</span>
                          </label>
                          <input
                            id="author"
                            name="author"
                            className="form-full input--lg"
                            defaultValue=""
                            size={30}
                            aria-required="true"
                            required
                            type="text"
                          />
                        </div>
                        <div className="col-sm-4 form-field-wrapper">
                          <label htmlFor="email">
                            Email<span className="required">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-full input--lg"
                            defaultValue=""
                            size={30}
                            aria-required="true"
                            required
                            type="email"
                          />
                        </div>
                        <div className="col-sm-4 form-field-wrapper">
                          <label htmlFor="url">site web</label>
                          <input
                            id="url"
                            name="url"
                            className="form-full input--lg"
                            defaultValue=""
                            size={30}
                            maxLength={200}
                            type="url"
                          />
                        </div>
                        <div className="col-12 form-field-wrapper">
                          <label htmlFor="comment">Commentaire</label>
                          <textarea
                            id="comment"
                            name="comment"
                            className="form-full"
                            cols={45}
                            rows={10}
                            aria-required="true"
                            required
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12 form-field-wrapper">
                          <button
                            name="submit"
                            id="submit"
                            className="btn btn--primary btn--lg"
                            type="submit"
                          >
                            Post Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*End Comment Area*/}
                </div>
                {/*Right Col*/}
                <div className="col-md-4 col-lg-3">
                  <aside className="widget-area">
                    {/*Widget*/}
                    <div className="widget">
                      <div className="widget-content">
                        <form className="search-form">
                          <input
                            className="search-field input--lg"
                            placeholder="Search.."
                            defaultValue=""
                            name="s"
                            type="search"
                          />
                          <button
                            type="submit"
                            className="search-button btn btn--primary btn--lg"
                          >
                            <i className="fa fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="widget">
                      <h4 className="widget-title">Categories</h4>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Beauty</button>
                            <span className="count">(4)</span>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Fashion</button>
                            <span className="count">(3)</span>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Life Style</button>
                            <span className="count">(2)</span>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Photography</button>
                            <span className="count">(1)</span>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Technology</button>
                            <span className="count">(1)</span>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Travel</button>
                            <span className="count">(1)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="widget">
                      <h4 className="widget-title">Archives</h4>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>juillet 2024</button>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>mars 2025</button>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>fevrier 2025</button>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>janvier 2025</button>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>decembre 2024</button>
                          </li>
                          <li>
                            <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Fashion</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="widget">
                      <h4 className="widget-title">Posts populaires</h4>
                      <div className="widget-content widget-blog-posts">
                        <ul>
                          {/*Post*/}
                          <li>
                            <span className="widget-post-thumb">
                              <img src="img/blog_img/001.jpg" alt="post" />
                            </span>
                            <h6>
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>
                                Le jeudi, le meilleur jour de la semaine
                              </button>
                            </h6>
                            <time
                              className="entry-date"
                              dateTime="2024-11-04T01:44:14+00:00"
                            >
                              04 Nov 2024
                            </time>
                          </li>
                          {/*Post*/}
                          <li>
                            <span className="widget-post-thumb">
                              <img src="img/blog_img/003.jpg" alt="post" />
                            </span>
                            <h6>
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>
                                How To Wear Dresses Over Pants
                              </button>
                            </h6>
                            <time
                              className="entry-date"
                              dateTime="2017-11-04T01:44:14+00:00"
                            >
                              04 Nov 2017
                            </time>
                          </li>
                          {/*Post*/}
                          <li>
                            <span className="widget-post-thumb">
                              <img src="img/blog_img/004.jpg" alt="post" />
                            </span>
                            <h6>
                              <button type="button" className="btn-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>
                                etre pret quand arrivera le printemps
                              </button>
                            </h6>
                            <time
                              className="entry-date"
                              dateTime="2025-04-04T01:44:14+00:00"
                            >
                              04 Nov 2025
                            </time>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="widget">
                      <h4 className="widget-title">Browse Tags</h4>
                      <div className="widget-content tagcloud">
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Cafe</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Robes</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Fashion</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Lifestyle</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Homme</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Store</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Trends</button>
                        <button type="button" className="tag-cloud-link" style={{background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer"}}>Femme</button>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="widget">
                      <div className="widget-content widget_media_image">
                        <span className="banner-item">
                          <img
                            src="img/banner/widget_banner01.jpg"
                            alt="banner"
                          />
                        </span>
                      </div>
                    </div>
                  </aside>
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

export default Blogsingle;