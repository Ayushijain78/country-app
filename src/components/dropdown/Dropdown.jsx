import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";
import { arrowWhiteIcon, downArrow } from "../../icons/assetsImport";
import { useTheme } from "../../api/customHook/useTheme";

const Dropdown = ({ options, getSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const { theme } = useTheme();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    getSelectedValue(option)
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const icons = theme === "dark" ? arrowWhiteIcon : downArrow;
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown__select" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <img src={icons} className={isOpen ? "down" : "up"} />
      </div>
      {isOpen && (
        <div className="dropdown__options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown__option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
