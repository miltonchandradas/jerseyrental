import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const ContributorDetails = ({ match }) => {
   const githubContext = useContext(GithubContext);

   const { getContributor, loading, contributor } = githubContext;

   useEffect(() => {
      getContributor(match.params.login);
      // eslint-disable-next-line
   }, []);

   const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
   } = contributor;

   if (loading) return <Spinner />;

   return (
      <Fragment>


         <div
            className="container"
            style={{ marginTop: "40px", marginBottom: "20px" }}
         >
            <Link
               to="/about"
               className="btn black white-text"
               style={{
                  textTransform: "none",
                  marginRight: "10px",
                  border: "black 0.5px solid"
               }}
            >
               <i class="material-icons left">navigate_before</i>
               Back
            </Link>
            Hireable:{" "}
            {hireable ? (
               <i className="fas fa-check green-text" />
            ) : (
               <i className="fas fa-times-circle red-text" />
            )}
         </div>

         <div className="container">
            <div
               className="row"
               style={{ border: "0.5px solid black", padding: "10px" }}
            >
               <div className="col s12 m6 center-align">
                  <img
                     href={`https://github.com/${login}`}
                     alt={login}
                     src={avatar_url}
                     className="circle"
                     style={{ width: "150px" }}
                  />
                  <h5 style={{ fontWeight: "bold" }}>{name}</h5>
                  <p>
                     <span style={{ fontWeight: "bold" }}>Location: </span>
                     {location}
                  </p>
               </div>
               <div className="col s12 m6" center-align>
                  {bio && (
                     <Fragment>
                        <h5 style={{ fontWeight: "bold" }}>Bio</h5>
                        <p>{bio}</p>
                     </Fragment>
                  )}
                  <a
                     href={html_url}
                     className="btn black white-text"
                     style={{ textTransform: "none" }}
                  >
                     Visit Github Profile
                  </a>
                  <p>
                     {login && (
                        <Fragment>
                           <span style={{ fontWeight: "bold" }}>
                              Username:{" "}
                           </span>{" "}
                           {login}
                        </Fragment>
                     )}
                  </p>
                  <p>
                     {company && (
                        <Fragment>
                           <span style={{ fontWeight: "bold" }}>Company: </span>{" "}
                           {company}
                        </Fragment>
                     )}
                  </p>
                  <p>
                     {blog && (
                        <Fragment>
                           <span style={{ fontWeight: "bold" }}>Website: </span>{" "}
                           {blog}
                        </Fragment>
                     )}
                  </p>
               </div>
            </div>
            <div
               className="row center-align"
               style={{ border: "0.5px solid black", paddingTop: "10px" }}
            >
                <div className="col s6 m4 l3">
               <a
                  href="#!"
                  className="btn red small"
                  style={{ textTransform: "none", borderRadius: "10px", marginRight:"10px", marginBottom:"10px"}}
               >
                  Followers: {followers}
               </a>
               </div>
               <div className="col s6 m4 l3">
               <a
                  href="#!"
                  className="btn green small"
                  style={{ textTransform: "none", borderRadius: "10px", marginRight:"10px", marginBottom:"10px" }}
               >
                  Following: {following}
               </a>
               </div>
               <div className="col s6 m4 l3">
               <a
                  href="#!"
                  className="btn black small"
                  style={{ textTransform: "none", borderRadius: "10px", marginRight:"10px", marginBottom:"10px" }}
               >
                  Public Repos: {public_repos}
               </a>
               </div>
               <div className="col s6 m4 l3">
               <a
                  href="#!"
                  className="btn grey small"
                  style={{ textTransform: "none", borderRadius: "10px", marginRight:"10px", marginBottom:"10px" }}
               >
                  Public Gists: {public_gists}
               </a>
               </div>
    
            </div>
         </div>

         <div className="container">
            
         </div>
      </Fragment>
   );
};

export default ContributorDetails;
