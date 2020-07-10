import React, { useState } from "react";
import ReactDOM from "react-dom";

const AddMogwaiBtn = () => {
    // edit mogwai array by using hooks
    const [mogwaiArray, setMogwaiArrayState] = useState(...MogwaiArrayData);
    // add mogwai via water button
    const addMogwai = () => {
        setMogwaiArrayState([...MogwaiArrayData, {
            direction: 0,
            colorImg: "",
            faceId: 4,
            select: false,
        }])
        return mogwaiArray;
    }
    console.log(mogwaiArray);

    render(

    )
}
