import React from 'react'
import { Link } from "react-router-dom";

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
          {/*Grid*/}
          <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
            {/*Categories Item*/}
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <Link className="categories-img-link" to="/collection/femme">
                  <img src="img/categories/001.jpg" alt="Accessoires femme" />
                </Link>
              </div>
              <div className="categories-content-overlay">
                <Link className="categories-caption categories-caption-bottom" to="/collection/femme">
                  Accessoires femme
                </Link>
              </div>
            </div>
          </div>
          {/*Grid*/}
          <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
            {/*Categories Item*/}
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <Link className="categories-img-link" to="/collection/enfant">
                  <img src="img/categories/002.jpg" alt="Mode enfant" />
                </Link>
              </div>
              <div className="categories-content-overlay">
                <Link className="categories-caption categories-caption-bottom" to="/collection/enfant">
                  Mode enfant
                </Link>
              </div>
            </div>
          </div>
          {/*Grid*/}
          <div className="col-lg-4 col-md-6 col-sm-12 nf-grid-item">
            {/*Categories Item*/}
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <Link className="categories-img-link" to="/collection/mode-femme">
                  <img src="img/categories/003.jpg" alt="Mode femme" />
                </Link>
              </div>
              <div className="categories-content-overlay">
                <Link className="categories-caption categories-caption-bottom" to="/collection/mode-femme">
                  Mode femme
                </Link>
              </div>
            </div>
          </div>
          {/*Grid*/}
          <div className="col-lg-8 col-md-12 col-sm-12 nf-grid-item">
            {/*Categories Item*/}
            <div className="categories-item categories-item_1">
              <div className="categories-image">
                <Link className="categories-img-link" to="/collection/homme">
                  <img src="img/categories/004.jpg" alt="Collection homme" />
                </Link>
              </div>
              <div className="categories-content-overlay">
                <Link className="categories-caption categories-caption-bottom" to="/collection/homme">
                  Collection homme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
