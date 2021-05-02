import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function executeSearch(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    // documentation: https://pexels.com/api/
    const pexelsApiKey =
      "563492ad6f917000010000011e952cbbc2a04a969da64dc80386951c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            placeholder="What word do you want to look up?"
            onChange={updateSearch}
          ></input>
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
