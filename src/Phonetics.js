import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h4>
        {props.phonetics.text}
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </h4>
    </div>
  );
}
