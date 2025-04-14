import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';
import Productlisting from './pages/product_listing/Productlisting';
import Productdetail from './pages/product_detail/Productdetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Loginregister from './pages/login_register/Loginregister';
import Bloglist from './pages/blog_list/Bloglist';
import Blogsingle from './pages/blog_single/Blogsingle';
import Error from './pages/Error';

function App() {
  return (
   <>
   <Routes>

    <Route path="/" element=<Home/> />
    <Route path="/product_listing" element=<Productlisting/> />
    <Route path="/product_detail" element=<Productdetail/> />
    <Route path="/Cart" element=<Cart/> />
    <Route path="/checkout" element=<Checkout/> />
    <Route path="/Contact" element=<Contact/> />
    <Route path="/About" element=<About/> />
    <Route path="/blog_list" element=<Bloglist/> />
    <Route path="/login_register" element=<Loginregister/> />
    <Route path="/blog_single" element=<Blogsingle/> />
    <Route path="/Error" element=<Error/> />
   </Routes>
  
   </>
  );
}

export default App;
