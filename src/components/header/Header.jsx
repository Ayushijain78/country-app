import React from "react";
import "./header.scss";
import { themeIcon } from "../../icons/assetsImport";
import { TEXT } from "./constants";
import { useTheme } from "../../api/customHook/useTheme";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header__container">
      <div className="header__text">Where in the world?</div>
      <div className="header__themeIcon" onClick={toggleTheme}>
        <img src={themeIcon} />
        {theme === "light" ? TEXT.theme_light : TEXT.theme_dark}
      </div>
    </div>
  );
};

export default Header;
