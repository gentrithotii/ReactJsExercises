import React from "react";

const AppHeader = ({ title, tagline }) => {
  return (
    <div>
      <h3>{tagline ? tagline : "Welcome"}</h3>
      <h3>{title}</h3>
    </div>
  );
};

export default AppHeader;
