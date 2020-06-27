
import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../atom";
import { ITodoItem } from "../Todos";
export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case "Show Completed":
                return list.filter((item: ITodoItem) => item.isComplete);
            case "Show Uncompleted":
                return list.filter((item: ITodoItem) => !item.isComplete);
            default:
                return list;
        }
    },
});