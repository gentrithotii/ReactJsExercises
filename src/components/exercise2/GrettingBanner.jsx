import React from "react";

const GrettingBanner = ({ name, role }) => {
  return (
    <div>
      {name && role ? (
        <p>
          Welcome back, {name} - {role}
        </p>
      ) : name ? (
        <p>Welcome back, {name}</p>
      ) : null}
    </div>
  );
};

export default GrettingBanner;
