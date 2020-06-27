import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./selector";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilter";
import TodoListStats from "./TodoListStats";

export interface ITodoItem {
    id: number;
    isComplete: boolean;
    text: string;
}

export default () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem: ITodoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};
