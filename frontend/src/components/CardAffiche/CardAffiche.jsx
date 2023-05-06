import React from "react";
import PropTypes from "prop-types";

function CardAffiche({ item }) {
  return (
    <div>
      <li key={item.id} className="wrap">
        <img alt="img" src={item.urls.regular} className="imgGallery" />
        <h1>{item.user.first_name}</h1>
        <p>{item.description}</p>
      </li>
    </div>
  );
}
CardAffiche.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default CardAffiche;
