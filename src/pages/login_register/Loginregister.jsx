import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Loginregister = () => {
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
                  <h1 className="breadcrumb-title">Mon compte</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Accueil</a>
                    </span>
                    <span>Mon compte</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="my-account-box mb-4">
                  <form>
                    <h2>Se connecter</h2>
                    {/*<p class="large">Great to have you back!</p>*/}
                    <p className="form-field-wrapper">
                      <label htmlFor="username">
                        votre nom ou votre email
                      </label>
                      <input
                        className="input--lg form-full"
                        name="username"
                        id="username"
                        autoComplete="username"
                        defaultValue
                        type="text"
                      />
                    </p>
                    <p className="form-field-wrapper">
                      <label htmlFor="password">Mot de passe</label>
                      <input
                        className="input--lg form-full"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        type="password"
                      />
                    </p>
                    <p className="form-field-wrapper">
                      <label className>
                        <input
                          className
                          name="rememberme"
                          id="Checkbox1"
                          defaultValue="forever"
                          type="checkbox"
                        />
                        <span>Se souvenir de moi</span>
                      </label>
                    </p>
                    <p className="form-field-wrapper form-row">
                      <button
                        type="submit"
                        className="btn btn--lg btn--primary"
                        name="login"
                        value="Log in"
                      >
                        Log In
                      </button>
                    </p>
                    <p className="form-field-wrapper lost_password">
                      <a href="#">Mot de passe oublié ?</a>
                    </p>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-account-box">
                  <form>
                    <h2>Register</h2>
                    {/*<p class="large">If you don’t have an account, register now!</p>*/}
                    <p className="form-field-wrapper">
                      <label htmlFor="reg_username">
                        Nom&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="input--lg form-full"
                        name="reg_username"
                        id="reg_username"
                        autoComplete="username"
                        defaultValue
                        type="text"
                      />
                    </p>
                    <p className="form-field-wrapper">
                      <label htmlFor="reg_email">
                        Adresse mail&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="input--lg form-full"
                        name="reg_email"
                        id="reg_email"
                        autoComplete="email"
                        defaultValue
                        type="email"
                      />
                    </p>
                    <p className="form-field-wrapper">
                      <label htmlFor="reg_password">
                        Mot de passe&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="input--lg form-full"
                        name="reg_password"
                        id="reg_password"
                        autoComplete="current-password"
                        type="password"
                      />
                    </p>
                    <p className="form-field-wrapper">
                    Vos données personnelles seront utilisées pour améliorer votre expérience sur ce site web, pour gérer l'accès à votre compte et à d'autres fins décrites dans notre politique de confidentialité.
                      <a href="#">politique de confidentialité</a>.
                    </p>
                    <p className="form-field-wrapper form-row">
                      <button
                        type="submit"
                        className="btn btn--lg btn--primary"
                        name="register"
                        value="Register"
                      >
                        Register
                      </button>
                    </p>
                  </form>
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

export default Loginregister;