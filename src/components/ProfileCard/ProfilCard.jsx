import React from "react";
import "./styles.css";

function ProfileCard({
  avatar,
  firstName,
  lastName,
  occupation,
  hairColor,
  height,
  hobby,
}) {
  return (
    <div className="profile-card">
      <img id="avatar" src={avatar} alt={`${firstName} ${lastName}`} />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Род деятельности:</p>
      <ul>
        <li>{occupation}</li>
      </ul>
      <p>Характеристики:</p>
      <ul>
        <li>{hairColor}</li>
        <li>{height}</li>
      </ul>
      <p>Хобби:</p>
      <ul>
        <li>{hobby}</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
