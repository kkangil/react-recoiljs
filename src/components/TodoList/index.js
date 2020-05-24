import React from "react";
import TodoCreator from "./TodoCreator";
import {useRecoilValue} from "recoil";
import {todoListState} from "../../recoil/todoList";
import TodoItem from "./TodoItem";

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <TodoCreator/>
            {todoList.map((todoItem, index) => (
                <TodoItem key={todoItem.id} todoItem={todoItem} index={index} />
            ))}
        </>
    )
}

export default TodoList;
