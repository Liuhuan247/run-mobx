import React, { useState, ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atom";
export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState<any>(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList: any) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

// utility for creating unique Id
let id = 0;
function getId() {
    return id++;
}
