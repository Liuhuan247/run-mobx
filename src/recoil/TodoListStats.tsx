import React from "react";
import { useRecoilValue, selector } from "recoil";
import { ITodoItem } from "./Todos";
import { todoListState } from "./atom";
const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter(
            (item: ITodoItem) => item.isComplete
        ).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted =
            totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});
export default function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}</li>
        </ul>
    );
}
