import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h4>{props.results.phonetics[0].text}</h4>
      </div>
    );
  } else {
    return null;
  }
}
