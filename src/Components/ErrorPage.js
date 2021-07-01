import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div style={{marginTop:'20rem', textAlign:'center'}}>
          <h1 style={{fontSize:'50px'}}>404! Page Not Found</h1>
        <button className="ui secondary basic button"><Link to="/" style={{color:'black'}}>Back to Home</Link></button>
      </div>
    </>
  );
};

export default Error;
