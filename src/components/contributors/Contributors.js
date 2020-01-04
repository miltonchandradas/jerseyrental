import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

import Contributor from "./Contributor";

const Contributors = () => {
   const githubContext = useContext(GithubContext);

   const { loading, contributors, getContributors } = githubContext;

   useEffect(() => {
      getContributors();
      // eslint-disable-next-line
   }, []);

   if (loading) {
      return <Spinner />;
   } else {
      return (
         <div className="row">
            <h4>
               <span className="red-text">Jersey Rental</span> Contributors
            </h4>
            {contributors.map(contributor => (
               <div className="col s6 m4" key={contributor.id}>
                  <Contributor contributor={contributor} />>
               </div>
            ))}
         </div>
      );
   }
};

export default Contributors;
