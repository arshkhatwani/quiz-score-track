import { atom } from "recoil";

export const scoreState = atom({
    key: "score",
    default: 0,
    effects: [
        ({ setSelf }) => {
            const localValue = localStorage.getItem("score");
            if (localValue) {
                setSelf(Number(localValue));
            }
        },
        ({ onSet }) => {
            onSet((newValue) => {
                localStorage.setItem("score", newValue.toString());
            });
        },
    ],
});

export const questionNumState = atom({
    key: "questionNum",
    default: 1,
    effects: [
        ({ setSelf }) => {
            const localValue = localStorage.getItem("questionNum");
            if (localValue) {
                setSelf(Number(localValue));
            }
        },
        ({ onSet }) => {
            onSet((newValue) => {
                localStorage.setItem("questionNum", newValue.toString());
            });
        },
    ],
});

export const activeQuestionState = atom({
    key: "activeQuestion",
    default: true,
    effects: [
        ({ setSelf }) => {
            const localValue = localStorage.getItem("activeQuestion");
            if (localValue) {
                setSelf(localValue === "true" ? true : false);
            }
        },
        ({ onSet }) => {
            onSet((newValue) => {
                console.log(newValue.toString());
                localStorage.setItem("activeQuestion", newValue.toString());
            });
        },
    ],
});
