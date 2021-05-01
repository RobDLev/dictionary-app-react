import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="section shadow p-3 mb-2 bg-body rounded">
          <h2>{props.results.word}</h2>
          <div>
            {props.results.phonetics.map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            })}
          </div>
        </div>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
