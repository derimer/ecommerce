import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
    <div>
      <div className="promotion-box">
        <div className="container-fluid">
          <p className="promotion-text">
            Livraison gratuite sur toutes les commandes de plus de 100 € !
            <Link className="link" to="/home"> {/* Utilisation de Link à la place de a */}
              Explorer notre collection
            </Link>
          </p>
          <span className="promotion-close">
            <i className="ti-close" />
          </span>
        </div>
      </div>

      <Header />
      <div className="page-container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
