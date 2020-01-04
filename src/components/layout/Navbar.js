import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <Fragment>
         <nav>
            <div
               className="nav-wrapper"
               style={{ marginLeft: "30px", marginRight: "30px" }}
            >
               <a href="/" className="brand-logo">
                  <i className="material-icons">cloud</i>Jersey Rental
               </a>
               <a
                  href="/"
                  data-target="mobile-nav"
                  className="sidenav-trigger"
               >
                  <i className="material-icons">menu</i>
               </a>
               <ul className="right hide-on-med-and-down">
                  <li>
                     <Link to="/howitworks">How it works</Link>
                  </li>
                  <li>
                     <Link to="/events">Events</Link>
                  </li>
                  <li>
                     <Link to="/about">About us</Link>
                  </li>
               </ul>
            </div>
         </nav>

         <ul id="mobile-nav" className="sidenav">
            <li>
               <Link to="/howitworks">How it works</Link>
            </li>
            <li>
               <Link to="/events">Events</Link>
            </li>
            <li>
               <Link to="/about">About us</Link>
            </li>
            <li>
               <Link to="/register">Register</Link>
            </li>
         </ul>
      </Fragment>
   );
};

export default Navbar;
