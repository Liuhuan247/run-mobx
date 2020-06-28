import React from "react";
import ReactDOM from "react-dom";
import ReduxCounter from "./Redux";
import NormalCounter from "./Normal";
import { Provider } from "react-redux";
import store from "./Redux/Store";

ReactDOM.render(
    <Provider store={store}>
        <ReduxCounter />
        <br />
        <NormalCounter />
    </Provider>,
    document.getElementById("root")
);
