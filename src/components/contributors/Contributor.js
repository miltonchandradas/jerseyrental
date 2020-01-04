import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Contributor = ({ contributor: { login, avatar_url, html_url } }) => {
   return (
      <Fragment>
         <div className="card-panel center-align">
            <img
               src={avatar_url}
               alt={login}
               style={{ width: "60px" }}
               className="circle"
            />
            <div
               className="caption"
               style={{ fontWeight: "bold", marginBottom: "10px" }}
            >
               {login}
            </div>
            <Link
               to={`/contributorDetails/${login}`}
               className="btn-small black white-text"
               style={{ textTransform: "none" }}
            >
               More...
            </Link>
         </div>
      </Fragment>
   );
};

Contributor.propTypes = {
   contributor: PropTypes.object.isRequired
};

export default Contributor;
