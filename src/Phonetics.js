import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  function playAudio(event) {
    return <div></div>;
  }

  return (
    <div className="Phonetics">
      <h4>
        {props.phonetics.text}
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </h4>
    </div>
  );
}
