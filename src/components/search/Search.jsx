import React from "react";
import { TEXT } from "../header/constants";
import { searchIcon, searchIconWhite } from "../../icons/assetsImport";
import "./search.scss";
import { useTheme } from "../../api/customHook/useTheme";
const Search = ({ setSearchTerm }) => {
  const { theme } = useTheme();
  const icon = theme === "dark" ? searchIconWhite : searchIcon;
  return (
    <div className="search__wrapper">
      <div className="search__container">
        <div className="search__box_container">
          <img src={icon} className="search__icon" />
          <input
            className="search__box"
            placeholder={TEXT.search_placeholer}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
