import React from "react";

const AppHeader = ({ title, tagline = "Welcome" }) => {
  return (
    <div>
      <h3>{tagline}</h3>
      <h3>{title}</h3>
    </div>
  );
};

export default AppHeader;
