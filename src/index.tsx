import React, { FC } from "react";
import ReactDOM from "react-dom";
import Timer from "./observer";
import { observable, autorun } from "mobx";
import { Provider, observer, inject, useObserver } from "mobx-react";
import Store from "./store";
// const arrayData = observable([
//     {
//         id: 0,
//         name: "zhangsan",
//         age: 13,
//     },
// ]);

// autorun(() => {
//     console.log(arrayData.length);
// });

// arrayData.push({ id: 2, name: "lisi", age: 19 });

const timerData = observable({
    secondsPassed: 0,
});

export type timerType = typeof timerData;

// setInterval(() => {
//     timerData.secondsPassed++;
// }, 1000);

// useObserver((props) => {
//     let i = 0;
//     setTimeout(() => {
//         props.store.add({
//             id: i++,
//             name: `zhang`,
//             age: 17,
//         });
//     }, 1000);
// })
const Demo: FC = () => {
    return <div>测试</div>;
};

interface storeType {
    id: number;
    name: string;
    age: number;
}

let store = new Store<storeType>();

// setInterval(() => {
//     store.add({ id: 1, name: "zhgan", age: 19 });
// }, 1000);

ReactDOM.render(
    <Provider store={store}>
        {/* <Timer timeData={timerData} />, */}
        <Demo />
    </Provider>,
    document.getElementById("root")
);
