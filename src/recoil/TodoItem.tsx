import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atom";
import { ITodoItem } from "./Todos";
export default function TodoItem({ item }: { item: ITodoItem }) {
    const [todoList, setTodoList] = useRecoilState<any>(todoListState);
    const index = todoList.findIndex(
        (listItem: ITodoItem) => listItem === item
    );

    const editItemText: ChangeEventHandler<HTMLInputElement> = ({
        target: { value },
    }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

function replaceItemAtIndex(arr: [], index: number, newValue: ITodoItem) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: [], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
