import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function executeSearch(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
