import React, { useState } from "react";
import ReactDOM from "react-dom";
import mogwaiList from "./MogwaiArrayData.js";
import Buttons from "./Buttons.js";
// images
import mogwaiOutline from "./images/v-mogwai-outline-01.svg";
import mogwaiColor01 from "./images/v-mogwai-color-05.svg";
import mogwaiColor02 from "./images/v-mogwai-color-06.svg";
import mogwaiColor03 from "./images/v-mogwai-color-03.svg";
import mogwaiColor04 from "./images/v-mogwai-color-04.svg";
import mogwaiColor05 from "./images/v-mogwai-color-07.svg";
import gremlin01 from "./images/gremlin-01.png";
import gremlin02 from "./images/gremlin-02.png";
import gremlin03 from "./images/gremlin-03.png";
import gremlin04 from "./images/gremlin-04.png";

// TO DO: eventually want to render svg and change colors through the svg clicks

// styles
var gridChildStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    flexBasis: "28%",
    padding: "10px",
    justifyContent: "center",
    margin: "10px",
    alignContent: "center",
    fontFamily: "Verdana, Tahoma, 'sans-serif'",
    fontWeight: "300",
    fontSize: "8pt",
};
var mogwaiStyle = {
    display: "block",
    width: "80%",
    margin: "50px auto 0 auto",
};
var selectedMogwaiStyle = {
    border: "2px solid #00ffaa",
    display: "block",
    margin: "49px auto -1px auto",
};
var deleteMogwaiStyle = {};

var iconButtonsStyle = {
    position: "relative",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    zIndex: "10",
};
var iconButton01Style = {
    top: "-22px",
    left: "-18px",
};
var iconButton02Style = {
    top: "-22px",
    left: "-8px",
};
var iconButton03Style = {
    top: "-18px",
    left: "4px",
    backgroundColor: "#dfdfdf",
};
var iconButton04Style = {
    top: "-18px",
    left: "16px",
};
var hideStyle = {
    visibility: "hidden",
};
var showStyle = {
    visibility: "visible",
};
var disableBtnStyle = {
    backgroundColor: "#dfdfdf",
};
var enableBtnStyle = {
    backgroundColor: "#fff",
};

const Mogwai = ({ direction, colorImg, faceId, select }) => {
    // edit mogwai array by using hooks
    // const [mogwaiArray, setMogwaiArrayState] = useState(...mogwaiList);
    // add mogwai via water button
    // const addMogwai = () => {
    //   setMogwaiArrayState([...mogwaiList, {
    //     direction: 0,
    //     colorImg: "",
    //     faceId: 4,
    //     select: false,
    //   }])
    //   return mogwaiArray;
    // }
    // console.log(mogwaiArray);
    // TO DO: add mogwai to array and display via water icon button

    // hide / show button states
    const [displayBtn, toggleDisplayBtn] = useState(hideStyle);
    // disable / enable button states
    const [enableBtn, toggleEnableBtn] = useState(enableBtnStyle);

    // begin single mogwai selection state
    const [selected, toggleSelected] = useState(false);
    const [selectionStyle, toggleSelectStyle] = useState(mogwaiStyle);
    function selectOneMogwai() {
        if (selected === false) {
            return (
                toggleSelected(true),
                toggleSelectStyle(selectedMogwaiStyle),
                toggleDisplayBtn(showStyle)
            );
        } else {
            return (
                toggleSelected(false),
                toggleSelectStyle(mogwaiStyle),
                toggleDisplayBtn(hideStyle)
            );
        }
    }

    // TO DO: make selected mogwai make all other mogwai selected states be false
    // TO DO: make single button for all style state change and have it only apply to the selected mogwai

    // end single mogwai selection state

    // begin toggle color mogwai
    const [colorMogwai, toggleColorMogwai] = useState(mogwaiOutline);

    const mogwaiImgArray = [
        mogwaiColor01,
        mogwaiColor02,
        mogwaiColor03,
        mogwaiColor04,
        mogwaiColor05,
    ];
    const [randomMogwai, chooseMogwai] = useState(
        mogwaiImgArray[Math.floor(Math.random() * mogwaiImgArray.length)]
    );

    function toggleColor() {
        if (colorMogwai === mogwaiOutline) {
            chooseMogwai(
                mogwaiImgArray[Math.floor(Math.random() * mogwaiImgArray.length)]
            );
            return toggleColorMogwai(randomMogwai);
        } else {
            if (
                colorMogwai === gremlin01 ||
                colorMogwai === gremlin02 ||
                colorMogwai === gremlin03 ||
                colorMogwai === gremlin04
            ) {
                chooseGremlin(
                    gremlinImgArray[Math.floor(Math.random() * gremlinImgArray.length)]
                );
                return toggleColorMogwai(randomGremlin);
            } else {
                chooseMogwai(
                    mogwaiImgArray[Math.floor(Math.random() * mogwaiImgArray.length)]
                );
                return toggleColorMogwai(randomMogwai);
            }
        }
    }
    // end toggle color mogwai

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
        // const currentMogwai = this.props.key;
        // console.log(currentMogwai);
        // return mogwaiList.slice(currentMogwai);
        return (
            (deleteMogwaiStyle = { display: "none" }),
            setTimeout(function () {
                deleteMogwaiStyle = { display: "block" };
            }, 500)
        );
    }

    // TO DO: Get this to function properly by pulling out the array item too!

    // end sunlight exposure (delete)

    // begin gremlin morph state (give water)
    const gremlinImgArray = [gremlin01, gremlin02, gremlin03, gremlin04];

    const [randomGremlin, chooseGremlin] = useState(
        gremlinImgArray[Math.floor(Math.random() * gremlinImgArray.length)]
    );

    const [isGremlin, switchGremlin] = useState(false);

    function gremlinMogwaiCheck() {
        if (
            colorMogwai === gremlin01 ||
            colorMogwai === gremlin02 ||
            colorMogwai === gremlin03 ||
            colorMogwai === gremlin04
        ) {
            return switchGremlin(true), toggleEnableBtn(disableBtnStyle);
        } else {
            chooseGremlin(
                gremlinImgArray[Math.floor(Math.random() * gremlinImgArray.length)]
            );
            toggleColorMogwai(randomGremlin);
            return colorMogwai, switchGremlin(true), toggleEnableBtn(disableBtnStyle);
        }
    }

    // end gremlin morph state (give water)

    return (
        <div
            className="mogwai"
            onClick={() => selectOneMogwai()}
            style={Object.assign(
                {},
                gridChildStyle,
                selectionStyle,
                deleteMogwaiStyle
            )}
        >
            <button
                id="direction-btn"
                style={Object.assign(
                    {},
                    iconButtonsStyle,
                    iconButton01Style,
                    displayBtn
                )}
                onClick={() => maxRotate()}
            >
                <img src="https://img.icons8.com/android/24/000000/rotate-right.png" />
            </button>
            <button
                id="delete-btn"
                style={Object.assign(
                    {},
                    iconButtonsStyle,
                    iconButton02Style,
                    displayBtn
                )}
                onClick={() => sunlightDelete()}
            >
                <img src="https://img.icons8.com/android/24/000000/sun.png" />
            </button>
            <button
                id="add-btn"
                style={Object.assign(
                    {},
                    iconButtonsStyle,
                    iconButton03Style,
                    displayBtn
                )}
            // onClick={() => addMogwai()}
            >
                <img src="https://img.icons8.com/windows/32/000000/water.png" />
            </button>
            <button
                id="gremlin-btn"
                style={Object.assign(
                    {},
                    iconButtonsStyle,
                    iconButton04Style,
                    displayBtn,
                    enableBtn
                )}
                onClick={() => gremlinMogwaiCheck()}
            >
                <img src="https://img.icons8.com/small/30/000000/poultry-leg.png" />
            </button>

            <img
                src={colorMogwai}
                width="100%"
                id={faceId}
                alt="mogwai"
                style={Object.assign(directionStyle, mogwaiStyle)}
                onClick={() => toggleColor()}
            />

            <p>
                Number: <b>{faceId}</b>
            </p>
            <p>
                Selected: <b>{selected ? "yes" : "no"}</b>
            </p>
            <p>
                Direction: <b>{directionState} degrees</b>
            </p>
            <p>
                Mogwai || Gremlin ? &nbsp; <b>{isGremlin ? "gremlin" : "mogwai"}</b>
            </p>
        </div>
    )
};

export default Mogwai;


