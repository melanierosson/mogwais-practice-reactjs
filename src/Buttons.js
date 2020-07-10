import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

var iconButtons = {
  position: "relative",
  borderRadius: "50%",
  height: "50px",
  width: "50px",
  zIndex: "10",
};
var iconButton01 = {
  top: "-22px",
  left: "-18px",
};
var iconButton02 = {
  top: "-22px",
  left: "-8px",
  backgroundColor: "#dfdfdf",
};
var iconButton03 = {
  top: "-18px",
  left: "4px",
  backgroundColor: "#dfdfdf",
};
var iconButton04 = {
  top: "-18px",
  left: "16px",
  backgroundColor: "#dfdfdf",
};

const Buttons = () => {
  // begin rotating state
  const [directionState, clockwiseTurn] = useState(0);

  let directStateJSON = JSON.stringify({ directionState });
  let rotateDirectionString = directStateJSON.match(/\d+/g) + `deg`;

  var directionStyle = {
    transform: `rotate(${rotateDirectionString})`,
  };

  function maxRotate() {
    if (directionState === 315) {
      return clockwiseTurn(0);
    } else {
      return clockwiseTurn(directionState + 45);
    }
  }
  // end rotating state

  // begin sunlight exposure (delete)
  function sunlightDelete() {
    // const currentMogwai = Mogwai.faceId;
    // console.log(currentMogwai);
    // return mogwaiList.slice(currentMogwai);
  }
  // TO DO: Get this to function properly!

  // end sunlight exposure (delete)

  return (
    <>
      <button
        id="direction-btn"
        style={Object.assign({}, iconButtons, iconButton01)}
        onClick={() => maxRotate()}
      >
        <img src="https://img.icons8.com/android/24/000000/rotate-right.png" />
      </button>
      <button
        id="delete-btn"
        style={Object.assign({}, iconButtons, iconButton02)}
        onClick={() => sunlightDelete()}
      >
        <img src="https://img.icons8.com/android/24/000000/sun.png" />
      </button>
      <button
        id="add-btn"
        style={Object.assign({}, iconButtons, iconButton03)}
        onClick={() => sunlightDelete()}
      >
        <img src="https://img.icons8.com/windows/32/000000/water.png" />
      </button>
      <button
        id="add-btn"
        style={Object.assign({}, iconButtons, iconButton04)}
        onClick={() => sunlightDelete()}
      >
        <img src="https://img.icons8.com/small/30/000000/poultry-leg.png" />
      </button>
    </>
  );
};

export default Buttons;
