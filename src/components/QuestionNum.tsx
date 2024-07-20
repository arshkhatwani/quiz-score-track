import { useRecoilValue } from "recoil";
import { questionNumState } from "../states";

export default function QuestionNum() {
    const questionNum = useRecoilValue(questionNumState);

    return (
        <div>
            <h1 className="text-center text-5xl md:text-6xl font-bold text-white">
                Question #{questionNum}
            </h1>
        </div>
    );
}
