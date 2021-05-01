import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio() {
    let audio = new Audio(props.phonetics.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <h4>
        {props.phonetics.text}
        <button className="speakerButton" onClick={playAudio}>
          🔈
        </button>
      </h4>
    </div>
  );
}
