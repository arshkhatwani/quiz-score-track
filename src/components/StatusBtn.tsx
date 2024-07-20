import { useResetRecoilState, useSetRecoilState } from "recoil";
import { activeQuestionState, questionNumState, scoreState } from "../states";

function StatusBtn({ label }: { label: "Reset" | "Complete" }) {
    const resetQuestionNum = useResetRecoilState(questionNumState);
    const resetScore = useResetRecoilState(scoreState);
    const resetActiveQuestion = useResetRecoilState(activeQuestionState);
    const setActiveQuestion = useSetRecoilState(activeQuestionState);

    const resetState = () => {
        resetQuestionNum();
        resetScore();
        resetActiveQuestion();
    };

    const showResult = () => {
        setActiveQuestion(false);
    };

    return (
        <div>
            <button
                onClick={label === "Reset" ? resetState : showResult}
                className="w-24 md:w-36 text-lg md:text-2xl text-black font-bold bg-white rounded-lg px-4 py-2 flex justify-center items-center">
                {label}
            </button>
        </div>
    );
}

export default StatusBtn;
