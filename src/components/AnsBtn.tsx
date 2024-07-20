import { useSetRecoilState } from "recoil";
import { questionNumState, scoreState } from "../states";

function AnsBtn({ label }: { label: "Correct" | "Incorrect" }) {
    const bgColor = label === "Correct" ? "green" : "red";

    const setScore = useSetRecoilState(scoreState);
    const setQuestionNum = useSetRecoilState(questionNumState);

    const correctAns = () => {
        setScore((prev) => prev + 1);
    };
    const onClick = () => {
        if (label === "Correct") {
            correctAns();
        }
        setQuestionNum((prev) => prev + 1);
    };

    return (
        <div>
            <button
                onClick={onClick}
                className={`w-36 md:w-60 text-2xl md:text-4xl flex justify-center items-center text-white bg-${bgColor}-500 px-5 py-3 rounded-lg font-semibold hover:bg-${bgColor}-700`}>
                {label}
            </button>
        </div>
    );
}

export default AnsBtn;
