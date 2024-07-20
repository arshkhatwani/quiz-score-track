import { atom } from "recoil";

export const scoreState = atom({
    key: "score",
    default: 0,
});

export const questionNumState = atom({
    key: "questionNum",
    default: 1,
});
