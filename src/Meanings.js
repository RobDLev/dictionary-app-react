import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h5>
        <em>{props.meanings.partOfSpeech}</em>
      </h5>
      <p>
        {props.meanings.definitions.map(function (definition, index) {
          return <div key={index}>{definition.definition}</div>;
        })}
      </p>
    </div>
  );
}
