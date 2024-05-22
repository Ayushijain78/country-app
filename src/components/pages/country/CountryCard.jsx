import React from "react";
import "./country.scss";
const CountryPage = ({
  image,
  title,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <div className="card__container" onClick={onClick}>
      <div className="card__image_wrapper">
        <img src={image} className="card__image" alt={`${title} flag`} />
      </div>
      <div className="card__content">
        <h4>{title}</h4>
        <div className="card__info">
          <span className="card__heading">
            Population:{" "}
            <span className="card__heading_content">{population}</span>
          </span>
          <span className="card__heading">
            Region: <span className="card__heading_content">{region}</span>
          </span>
          <span className="card__heading">
            Capital: <span className="card__heading_content">{capital}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
