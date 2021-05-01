import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="section shadow p-3 mb-2 bg-body rounded">
        <h5>
          <em>{props.meanings.partOfSpeech}</em>
        </h5>
        <div>
          <ul>
            {props.meanings.definitions.map(function (definition, index) {
              return (
                <li key={index}>
                  {definition.definition}
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
