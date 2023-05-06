import React from "react";

const CardAffiche = ({ item }) => {
  return (
    <div>
      <li key={item.id} className="wrap">
        <img alt="img" src={item.urls.regular} className="imgGallery" />
        <h1>{item.user.first_name}</h1>
        <description>{item.description}</description>
      </li>
    </div>
  );
};

export default CardAffiche;
