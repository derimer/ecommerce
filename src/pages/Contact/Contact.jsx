import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Contact = () => {
  return (
    <>
    <Header />



<div className="page-contaiter">
  {/*Breadcrumb*/}
  <section className="breadcrumb">
    <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} />
    <div className="breadcrumb-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="breadcrumb-title">Nous contacter</h1>
            <nav className="breadcrumb-link">
              <span><a href="home.html">Accueil</a></span>
              <span>Nous contacter</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Breadcrumb*/}
  {/*Contact Form & Info*/}
  <section className="sec-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="page-title">Contact</h2>
          <form className="Contact-form">
            <div className="form-field-wrapper">
              <label>Votre nom<span className="required">*</span></label>
              <input id="author" className="input--lg form-full" name="author" placeholder="Enter Your Name" defaultValue size={30} aria-required="true" required type="text" />
            </div>
            <div className="form-field-wrapper">
              <label>Votre Email<span className="required">*</span></label>
              <input id="author-email" className="input--lg form-full" name="author" placeholder="Enter Your Email" defaultValue size={30} aria-required="true" required type="email" />
            </div>
            <div className="form-field-wrapper">
              <label>objet<span className="required">*</span></label>
              <input id="subject" className="input--lg form-full" name="author" placeholder="Enter Subject" defaultValue size={30} aria-required="true" required type="text" />
            </div>
            <div className="form-field-wrapper">
              <label>Commentaires<span className="required">*</span></label>
              <textarea id="comment" className="input--lg form-full" name="comment" placeholder="Message" cols={45} rows={8} aria-required="true" required defaultValue={""} />
            </div>
            <div className="form-field-wrapper">
              <input name="submit" id="submit" className="submit btn btn--lg btn--primary" defaultValue="Send Message" type="submit" />
            </div>
          </form>
        </div>
        <div className="col-md-5 offset-md-1">
          <h2 className="page-title">Contact info</h2>
          <div className="contact-information">
            <div className="form-field-wrapper">
              <label>Adresse Postale</label>
              <p>
                29 Shadow Brook Court Warwick,<br />
                RI 02886
              </p>
            </div>
            <div className="form-field-wrapper">
              <label>JRD Ltd</label>
              <p>
                Le village,<br />
                072010 saint-vincent-de-barrès  
              </p>
            </div>
            <div className="form-field-wrapper">
              <label>Contact Information</label>
              <p>
                <i className="ti-email left" />jderimer@gmail.com<br />
                <i className="ti-headphone-alt left" />0788399537              </p>
            </div>
            <hr />
            <div className="form-field-wrapper">
              <label>Suivez-nous</label>
              <ul className="social large">
                <li>
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-google" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin-square" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Contact Form & Info*/}
</div>

    <Footer />
    </>
  )
}

export default Contact