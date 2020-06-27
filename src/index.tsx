import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./recoil/Todos";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <TodoList />
    </RecoilRoot>,
    document.getElementById("root")
);
