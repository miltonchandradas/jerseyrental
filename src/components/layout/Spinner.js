import React from "react";

const Spinner = () => {
   return (
      <div className="progress">
         <div className="determinate" style={{ width: "70%" }}></div>
      </div>
   );
};

export default Spinner;
