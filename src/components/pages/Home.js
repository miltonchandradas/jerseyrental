import React, { Fragment } from "react";
import image1 from "../../images/resort1.jpg";
import image2 from "../../images/resort2.jpg";
import image3 from "../../images/resort3.jpg";

const Home = () => {
   return (
      <Fragment>
         <div className="slider scrollspy">
            <ul className="slides">
               <li>
                  <img src={image1} alt="Atlanta United..." />
                  <div className="caption left-align">
                     <h2 className="white-text text-darken-3">This is our big Tagline!</h2>
                     <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint, nostrum.
                     </h5>
                  </div>
               </li>
               <li>
                  <img src={image2} alt="Atlanta United..." />
                  <div className="caption left-align">
                  <h2 className="white-text text-darken-3">This is our big Tagline!</h2>
                     <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, praesentium.
                     </h5>
                  </div>
               </li>
               <li>
                  <img src={image3} alt="Atlanta United..." />
                  <div className="caption left-align">
                  <h2 className="white-text text-darken-3">This is our big Tagline!</h2>
                     <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloribus, vel?
                     </h5>
                  </div>
               </li>
            </ul>
         </div>

         <section className="section section-search red darken-1 white-text center scrollspy">
            <div className="container">
               <div className="row">
                  <div className="col s12">
                     <h3>Search Events</h3>
                     <div className="input-field">
                        <input
                           type="text"
                           className="white grey-text autocomplete"
                           placeholder="Enter your search string..."
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="section section-icons grey lighten-4 center scrollspy">
            <div className="container">
               <div className="row">
                  <div className="col s12 m4">
                     <div className="card-panel">
                        <i className="material-icons large red-text">room</i>
                        <h4>Play tennis</h4>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Doloremque, pariatur?
                        </p>
                     </div>
                  </div>
                  <div className="col s12 m4">
                     <div className="card-panel">
                        <i className="material-icons large red-text">room</i>
                        <h4>Play tennis</h4>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Doloremque, pariatur?
                        </p>
                     </div>
                  </div>
                  <div className="col s12 m4">
                     <div className="card-panel">
                        <i className="material-icons large red-text">room</i>
                        <h4>Play tennis</h4>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Doloremque, pariatur?
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   );
};

export default Home;
