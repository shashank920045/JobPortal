import React from "react";
import "./jobs.css";
import close from "./images/icon-remove.svg";

const Header = ({ selectedKeywords, setSelectedKeywords }) => {
  return (
    <div className="header-container">
      <ul>
        {selectedKeywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => setSelectedKeywords(selectedKeywords.filter(item=>item!=key))}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => setSelectedKeywords([])}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;