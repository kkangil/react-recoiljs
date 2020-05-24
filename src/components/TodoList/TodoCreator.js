import React from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {inputValueState, todoListSelector} from "../../recoil/todoList";

function TodoCreator() {
    const [value, setValue] = useRecoilState(inputValueState);
    const onChange = e => setValue(e.target.value);
    const setTodoListSelector = useSetRecoilState(todoListSelector);
    const addItem = () => {
        setTodoListSelector({
            text: value,
            isComplete: false,
        });
        setValue("");
    };

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default TodoCreator;
