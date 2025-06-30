import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Cart = () => {
  const handleRemoveProduct = () => {
    // Ici tu mets le code pour supprimer le produit de ton panier
    console.log("Produit supprimé !");
  };

  const handleUpdateShipping = () => {
    // Code pour mettre à jour la livraison
    console.log("Mise à jour de la livraison");
  };

  return (
    <>
      <Header />
      <div className="page-container"> {/* Corrigé si c'était une faute */}
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
                  <h1 className="breadcrumb-title">Panier</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <Link to="/Home">Accueil</Link> {/* Lien vers Home.jsx */}
                    </span>
                    <span>Panier</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding--md">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <article>
                  <form className="cart-form">
                    <div className="cart-product-table-wrap responsive-table">
                      <table>
                        <thead>
                          <tr>
                            <th className="product-remove" />
                            <th className="product-thumbnail" />
                            <th className="product-name">Produit</th>
                            <th className="product-price">Prix</th>
                            <th className="product-qty">Quantité</th>
                            <th className="product-subtotal">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="product-remove">
                              <button
                                type="button"
                                onClick={handleRemoveProduct}
                                aria-label="Supprimer le produit"
                                className="btn-link"
                              >
                                <i className="fa fa-times-circle" aria-hidden="true" />
                              </button>
                            </td>

                            <td className="product-thumbnail">
                              <Link to="/product_detail">
                                <img src="img/products/01/01.jpg" alt="Produit" />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to="/product_detail">Man Ruched Floral Applique Tee</Link>
                            </td>
                            <td className="product-price">
                              <span className="product-price-amount amount">
                                <span className="currency-sign">€</span>39.00
                              </span>
                            </td>
                            <td>
                              <div className="product-quantity">
                                <span data-value="+" className="quantity-btn quantityMinus">
                                  <i className="ti-minus" />
                                </span>
                                <input
                                  className="quantity input-lg"
                                  step={1}
                                  min={1}
                                  max={9}
                                  name="quantity"
                                  defaultValue={1}
                                  title="Quantity"
                                  type="number"
                                />
                                <span data-value="-" className="quantity-btn quantityPlus">
                                  <i className="ti-plus" />
                                </span>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="product-price-sub_totle amount">
                                <span className="currency-sign">€</span>39.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-remove">
                              <button
                                type="button"
                                onClick={handleRemoveProduct}
                                aria-label="Supprimer le produit"
                                className="btn-link"
                              >
                                <i className="fa fa-times-circle" aria-hidden="true" />
                              </button>
                            </td>
                            <td className="product-thumbnail">
                              <Link to="/product_detail">
                                <img src="img/products/02/01.jpg" alt="Produit" />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to="/product_detail">Man Ruched Floral Applique Tee</Link>
                            </td>
                            <td className="product-price">
                              <span className="product-price-amount amount">
                                <span className="currency-sign">$</span>39.00
                              </span>
                            </td>
                            <td>
                              <div className="product-quantity">
                                <span data-value="+" className="quantity-btn quantityMinus">
                                  <i className="ti-minus" />
                                </span>
                                <input
                                  className="quantity input-lg"
                                  step={1}
                                  min={1}
                                  max={9}
                                  name="quantity"
                                  defaultValue={1}
                                  title="Quantity"
                                  type="number"
                                />
                                <span data-value="-" className="quantity-btn quantityPlus">
                                  <i className="ti-plus" />
                                </span>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="product-price-sub_totle amount">
                                <span className="currency-sign">€</span>39.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={6}>
                              <div className="coupon">
                                <input
                                  name="coupon_code"
                                  className="input--lg"
                                  id="coupon_code"
                                  defaultValue=""
                                  placeholder="Coupon code"
                                  type="text"
                                />
                                <button
                                  type="submit"
                                  className="btn btn--lg btn--secondary"
                                  name="apply_coupon"
                                  value="Apply Coupon"
                                >
                                  Appliquer le coupon
                                </button>
                              </div>
                              <button
                                type="submit"
                                className="update-cart btn btn--lg btn--secondary"
                                name="update_cart"
                                value="Update Cart"
                                disabled
                              >
                                Mettre à jour le panier
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                  <div className="cart-collaterals">
                    <div className="cart_totals">
                      <h3>Panier total</h3>
                      <table>
                        <tbody>
                          <tr>
                            <th data-title="Subtotal">Sous-total</th>
                            <td>
                              <span className="price-amount amount">
                                <span className="currencySymbol">€</span>88.00
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th data-title="Shipping">Shipping</th>
                            <td>
                              <ul id="shipping_method">
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_flat_rate2"
                                    defaultValue="flat_rate:2"
                                    defaultChecked
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_flat_rate2">
                                    forfait:{" "}
                                    <span className="price-amount amount">
                                      <span className="currencySymbol">€</span>
                                      10.00
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_free_shipping3"
                                    defaultValue="free_shipping:3"
                                    className="shipping_method"
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_free_shipping3">
                                    Livraison gratuite:{" "}
                                  </label>
                                </li>
                                <li>
                                  <input
                                    name="shipping_method[0]"
                                    data-index={0}
                                    id="shipping_method_0_local_pickup4"
                                    defaultValue="local_pickup:4"
                                    className="shipping_method"
                                    type="radio"
                                  />
                                  <label htmlFor="shipping_method_0_local_pickup4">
                                    Retrait local:{" "}
                                    <span className="price-amount amount">
                                      <span className="currencySymbol">£</span>
                                      0.00
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <button
                                type="button"
                                onClick={handleUpdateShipping}
                                className="btn btn-link"
                              >
                                Mettre à jour la livraison
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td>
                              <span className="price-amount amount">
                                <span className="currencySymbol">€</span>89.98
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="proceed-to-checkout">
                        <Link
                          to="/checkout"
                          className="checkout-button btn btn--lg btn--primary full-width"
                        >
                          Procéder au paiement
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
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

export default Cart;
