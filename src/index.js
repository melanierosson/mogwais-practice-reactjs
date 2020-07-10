import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Mogwai from "./Mogwai.js";
import mogwaiList from "./MogwaiArrayData.js";

var gridStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  padding: "0 0 20px 0",
};

const InitLoadMogwais = () => {
  return (
    <div className="container">
      <Header />
      <div className="mogwai-grid" style={gridStyle}>
        {mogwaiList.map(({ direction, colorImg, faceId, select }, i) => (
          <Mogwai
            key={i}
            direction={direction}
            colorImg={colorImg}
            faceId={faceId}
            select={select}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(
  <InitLoadMogwais />,
  document.getElementById("root")
);