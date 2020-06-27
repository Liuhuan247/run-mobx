import React, { ChangeEventHandler } from "react";
import { useRecoilState, atom } from "recoil";

const todoListFilterState = atom({
    key: "todoListFilterState",
    default: "Show All",
});
export default function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}
