import React from 'react'
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
  <section className="sec-padding">
    <div className="container">
      <div className="page-head">
        <span className="page-sub-title">Meilleures ventes</span>
        <h2 className="page-title">de la semaine</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/01">
                <img src="img/products/01/01.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
              {/*Labels*/}
              <div className="product-labels">
                <span className="product-label label-hot">Hot</span>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/01" className="product-item-title"><span>Chemisiers légers</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span className="product-price-currency-symbol">€</span>49.99
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/02">
                <img src="img/products/03/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Selectionnez une Option</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/02" className="product-item-title"><span>femme robe liberté</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <del>
                    <span className="product-price-currency-symbol">€</span>49.99
                  </del>
                  <ins>
                    <span className="product-price-currency-symbol">€</span>29.99
                  </ins>
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/03">
                <img src="img/products/09/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
              {/*Labels*/}
              <div className="product-labels">
                <span className="product-label label-soldout">épuisé</span>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/03" className="product-item-title"><span>chemise sport homme</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span><span className="product-price-currency-symbol">€</span>49.99</span>
                </span>
                –
                <span className="product-price-amount">
                  <span><span className="product-price-currency-symbol">€</span>74.99</span>
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/04">
                <img src="img/products/10/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/04" className="product-item-title"><span>Chemisiers à manches longues homme sport</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span className="product-price-currency-symbol">€</span>49.99
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/05">
                <img src="img/products/04/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/05" className="product-item-title"><span>robe femme</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span className="product-price-currency-symbol">€</span>49.99
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/06">
                <img src="img/products/12/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
              {/*Labels*/}
              <div className="product-labels">
                <span className="product-label label-sale">-40%</span>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/06" className="product-item-title"><span>tee-shirt homme</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <del>
                    <span className="product-price-currency-symbol">€</span>49.99
                  </del>
                  <ins>
                    <span className="product-price-currency-symbol">€</span>19.99
                  </ins>
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/07">
                <img src="img/products/06/02.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Ajoutez au panier</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/07" className="product-item-title"><span>ensemble femme</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span className="product-price-currency-symbol">€</span>49.99
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
        {/*Item*/}
        <div className="prodct-item-element col-sm-6 col-md-4 col-lg-3">
          <div className="product-item">
            {/*Product Img*/}
            <div className="product-item-img">
              {/*Image*/}
              <Link className="product-item-img-link" to="/product_detail/08">
                <img src="img/products/14/01.jpg" alt="Product Item" />
              </Link>
              {/*Add to Link*/}
              <div className="add-to-link">
                <button className="btn btn--primary btn--sm">Selectionnez une Option</button>
              </div>
              {/*Hover Icons*/}
              <div className="hover-product-icon">
                <div className="product-icon-btn-wrap">
                  <button data-toggle="tooltip" data-placement="left" title="Quick View" className="icon-btn"><i className="ti-search" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Whishlist" className="icon-btn"><i className="ti-heart" /></button>
                  <button data-toggle="tooltip" data-placement="left" title="Add to Compare" className="icon-btn"><i className="ti-reload" /></button>
                </div>
              </div>
              {/*Labels*/}
              <div className="product-labels">
                <span className="product-label label-new">Nouveau</span>
                <span className="product-label label-hot">Hot</span>
              </div>
            </div>
            {/*Product Content*/}
            <div className="product-item-content">
              <div className="tag"><span>Minimal</span></div>
              <Link to="/product_detail/08" className="product-item-title"><span>Chemisiers à manches courtes</span></Link>
              <p className="product-item-price">
                <span className="product-price-amount">
                  <span><span className="product-price-currency-symbol">€</span>49.99</span>
                </span>
                –
                <span className="product-price-amount">
                  <span><span className="product-price-currency-symbol">€</span>74.99</span>
                </span>
              </p>
              <div className="product-rating">
                <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                  <span style={{width: '60%'}} />
                </div>
                <span className="product-rating-count"><span className="count">3</span> Reviews</span>
              </div>
              <p className="product-description">
                Un imprimeur inconnu a rassemblé une épreuve de caractères pour en faire un recueil de spécimens typographiques. Ce recueil a non seulement survécu à cinq siècles, mais a également traversé le passage à l'électronique sans pour autant changer fondamentalement de forme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container text-center">
      <Link to="/product_listing" className="btn btn--primary">en voir +</Link>
    </div>
  </section>
  )
}

export default Section4
