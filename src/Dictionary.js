import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
            placeholder="What word would you like to look up?"
            onChange={updateSearch}
          ></input>
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
