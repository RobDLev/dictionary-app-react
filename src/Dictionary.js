import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function executeSearch(event) {
    event.preventDefault();
    alert(`Finding definition for ${keyword}...`);
  }

  function updateSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={executeSearch}>
        <div className="mb-3 row">
          <input
            type="Search"
            className="col-sm-10 form-control"
            onChange={updateSearch}
          ></input>
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
