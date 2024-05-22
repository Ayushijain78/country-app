import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./country.scss";
import { CONSTANT } from "./config";
const CountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state?.country;

  if (!country) return <p>{CONSTANT.NO_MATCH}</p>;
  const renderButton = () => {
    return country?.borders.map((border) => {
      return <button>{border}</button>;
    });
  };
  return (
    <div>
      <button className="country__back" onClick={() => navigate(-1)}>
        {CONSTANT.BACK}
      </button>
      <div className="country__container">
        <div className="country__image-container">
          <img
            src={country.flags.svg}
            alt={`${countryName} flag`}
            className="country__image"
          />
        </div>
        <div className="country__deatils">
          <h1>{countryName}</h1>
          <div className="country__grid">
            <p>
              {CONSTANT.NATIVE_NAME}
              <span>{country?.name?.common || ""}</span>
            </p>
            <p>
              {CONSTANT.REGION}
              <span>{country?.region || ""}</span>
            </p>
            <p>
              {CONSTANT.SUB_REGION}
              <span>{country?.subregion || ""}</span>
            </p>
            <p>
              {CONSTANT.CURRENCIES}
              <span>{country?.currencies?.MDL?.name || ""}:</span>
            </p>
            <p>
              {CONSTANT.CAPITAL}
              <span>{country?.capital}</span>
            </p>
            <p>
              {CONSTANT.POPULATION}:<span>{country?.population || ""}</span>
            </p>
          </div>
          {country?.borders&&<div className="country__border">
            <p>{CONSTANT.BORDER_COUNTRY}</p>
            <div className="country__flex">{renderButton()}</div>
          </div>}
        </div>
      </div>
     
    </div>
  );
};

export default CountryDetails;
