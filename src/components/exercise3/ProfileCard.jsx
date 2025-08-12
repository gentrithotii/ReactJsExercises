import React from "react";

function ProfileCard({ avatar, name, jobTitle, email }) {
  const profileFirstInitials = () => {
    const arrayName = name.split(" ");
    const fName = arrayName[0].charAt(0);
    const lName = arrayName[1].charAt(0);

    return fName + lName;
  };

  return (
    <div className="card my-3" style={{ width: "25rem" }}>
      {avatar ? (
        <img
          src={`${avatar}`}
          className="rounded mx-auto d-block"
          alt="Person"
        />
      ) : (
        <h1>{profileFirstInitials()}</h1>
      )}

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{jobTitle}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
