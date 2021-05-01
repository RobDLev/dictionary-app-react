import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="section shadow p-3 mb-5 bg-body rounded">
        <h5>
          <em>{props.meanings.partOfSpeech}</em>
        </h5>
        <div>
          {props.meanings.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                {definition.definition}
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
