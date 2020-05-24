import {atom, selector} from "recoil";

const getName = name => new Promise(resolve => {
    window.setTimeout(() => {
        resolve({name});
    }, 1000);
});

export const currentUserNameState = atom({
    key: 'currentUserNameState',
    default: "Kkangil",
});

export const currentUserName = selector({
    key: 'currentUserName',
    get: async ({get}) => {
        const response = await getName(get(currentUserNameState));
        return response.name;
    },
});
