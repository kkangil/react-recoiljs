import React from "react";
import {useRecoilState} from "recoil";
import {todoListState} from "../../recoil/todoList";

function TodoItem({todoItem, index}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const editItemText = e => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todoItem,
            text: e.target.value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todoItem,
            isComplete: !todoItem.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={todoItem.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={todoItem.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default TodoItem;

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
