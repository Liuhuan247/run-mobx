import React from "react";
import ReactDOM from "react-dom";
import Timer from "./observer";
import { observable } from "mobx";

const timerData = observable({
    secondsPassed: 0,
});

export type timerType = typeof timerData;

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

ReactDOM.render(
    <Timer timeData={timerData} />,
    document.getElementById("root")
);
