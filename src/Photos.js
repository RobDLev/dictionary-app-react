import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="section shadow p-3 mb-2 bg-body rounded">
          <div className="container row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <a href={photo.src.original} target="_blank">
                    <img
                      key={index}
                      src={photo.src.tiny}
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <div id="courtesy">
            Image search courtesy of{" "}
            <a href="https://pexels.com" target="_blank">
              pexels.com
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
