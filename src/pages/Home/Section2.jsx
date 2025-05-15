import React from 'react'

const Section2 = () => {
  return (
    <section className="sec-padding-t">
      <div className="container">
        <div className="page-head">
          <span className="page-sub-title">Voir notre Collection</span>
          <h2 className="page-title">Special Categories</h2>
        </div>
      </div>
      <div className="container">
        <div className="row nf-grid">
          {/* Grid */}
          <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
            {/* Categories Item */}
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <a className="categories-img-link" href="/product_listing">
                  <img src="img/categories/001.jpg" alt="Women Accesories1" />
                </a>
              </div>
              <div className="categories-content-overlay">
                <a className="categories-caption categories-caption-bottom" href="/product_listing">Accessoires femme</a>
              </div>
            </div>
          </div>
          {/* More Categories Items */}
          <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <a className="categories-img-link" href="/product_listing">
                  <img src="img/categories/002.jpg" alt="Women Accesories2" />
                </a>
              </div>
              <div className="categories-content-overlay">
                <a className="categories-caption categories-caption-bottom" href="/product_listing">Mode enfant</a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <a className="categories-img-link" href="/product_listing">
                  <img src="img/categories/003.jpg" alt="Women Accesories3" />
                </a>
              </div>
              <div className="categories-content-overlay">
                <a className="categories-caption categories-caption-bottom" href="/product_listing">Mode femme</a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <a className="categories-img-link" href="/product_listing">
                  <img src="img/categories/004.jpg" alt="Women Accesories4" />
                </a>
              </div>
              <div className="categories-content-overlay">
                <a className="categories-caption categories-caption-bottom" href="/product_listing">Collection homme</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
