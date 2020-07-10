import React, { useState } from "react";
import ReactDOM from "react-dom";

// styles
var headerStyle = {
  fontFamily: "Verdana, Tahoma, sans-serif",
  lineHeight: "1.5rem",
  marginLeft: "24px",
  marginRight: "24px",
  display: "flex",
  flexFlow: "row wrap",
};
var headerTitleStyle = {
  fontSize: "36px",
  width: "100%",
};

const Header = () => {
  let randomTime = () => {
    let hrs = Math.round(Math.random() * 4);
    let mins = Math.round(Math.random() * 60);
    var hFormat = hrs < 12 ? "0" : "";
    var mFormat = mins < 10 ? "0" : "";
    var amPm = hrs < 12 ? "AM" : "AM";
    var is12 = hrs % 12 === 0;

    return amPm === "AM" && !is12
      ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
      : "AM" && is12
      ? String(12 + ":" + mFormat + mins + " " + amPm)
      : is12
      ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
      : String(hFormat + (hrs - 12) + ":" + mFormat + mins + " " + amPm);
  };

  var resultTime = randomTime();

  return (
    <section style={headerStyle}>
      <header style={{ flexGrow: "6" }}>
        <h1 style={headerTitleStyle}>Mogwais Practice ReactJS</h1>
      </header>
      <article style={{ flexGrow: "4", textAlign: "right", marginTop: "20px" }}>
        <p>
          It is approximately{" "}
          <b
            style={{
              fontSize: "20pt",
              backgroundColor: "#000",
              color: "lime",
              borderRadius: "10px",
              padding: "10px",
              fontFamily: "Monaco, Monospace",
              border: "2px solid yellow",
            }}
          >
            {resultTime}
          </b>
        </p>
      </article>
      <article style={{ flexBasis: "100%" }}>
        <p>
          Instructions: Click mogwais to change their colors and see other
          customization options.
          <br />
          <b style={{ color: "red" }}>
            WARNING: Don't feed them after midnight!
          </b>
        </p>
      </article>
    </section>
  );
};

export default Header;
