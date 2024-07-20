import { useRecoilValue } from "recoil";
import { activeQuestionState } from "../states";
import StatusBtn from "./StatusBtn";

export default function QuizStatus() {
    const activeQuestion = useRecoilValue(activeQuestionState);

    return (
        <div className="flex justify-evenly gap-20">
            <StatusBtn label="Reset" />
            {activeQuestion ? <StatusBtn label="Complete" /> : <></>}
        </div>
    );
}
