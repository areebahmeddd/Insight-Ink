import React, { useState } from "react";
import "./charts.css";
const Charts = ({ chartspic }) => {
  const [isSentimentMode, setIsSentimentMode] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSwitchChange = () => {
    setIsSentimentMode(!isSentimentMode);
    handleClearSearch();
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="top-bar">
        <div className="search-bar-container">
          <i className="fa fa-search" style={{color:"#C5C5C5",marginRight:"5px"}}></i>
          <span className="search-bar-span">Search</span>
          <div className="search-bar-divider">
          <input
            type="text"
            className="search-bar"
            value={searchValue}
            onChange={handleSearchInputChange}
            disabled={isSentimentMode}
          />
          {searchValue && (
            <button className="clear-button" onClick={handleClearSearch}>
              <i className="fa fa-times" style={{color:"#C5C5C5"}}></i>
            </button>
          )}
          </div>
        </div>
        <div className="switch-container">
          <div className="left-txt" style={{ padding: "5px" }}>
            Sentiment
          </div>
          <label className="switch">
            <input type="checkbox" onChange={handleSwitchChange} />
            <span className="slider round"></span>
          </label>
          <div className="rgt-txt" style={{ padding: "5px" }}>
            Department
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={chartspic} alt="" className="image" />
      </div>
    </>
  );
};

export default Charts;
