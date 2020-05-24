import {atom, selector} from "recoil";

export const countState = atom({
    key: "countState",
    default: 0
});

export const countEvenState = selector({
    key: "countEvenState",
    get: ({get}) => get(countState) % 2 === 0,
    set: ({set}, newValue) => set(countState, newValue)
});
