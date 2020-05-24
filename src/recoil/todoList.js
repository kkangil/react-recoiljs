import {atom, selector} from "recoil";

let id = 0;
function getId() {
    return id++;
}

export const inputValueState = atom({
    key: "inputValueState",
    default: ""
});

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});

export const todoListSelector = selector({
    key: 'todoListSelector',
    get: ({get}) => get(todoListState),
    set: ({set, get}, newValue) => set(todoListState, [
        ...get(todoListState), {...newValue, id: getId()}
    ])
});
