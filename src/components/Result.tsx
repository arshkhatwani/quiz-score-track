import { useRecoilValue } from "recoil";
import { questionNumState, scoreState } from "../states";

export default function Result() {
    const questionNum = useRecoilValue(questionNumState) - 1;
    const score = useRecoilValue(scoreState);
    const percentage = ((score * 100) / questionNum).toFixed(2);

    return (
        <div className="pt-20 flex flex-col justify-center items-center gap-10">
            <h1 className="text-center text-5xl md:text-6xl font-bold text-white">
                Total Questions: {questionNum}
            </h1>
            <h1 className="text-center text-5xl md:text-6xl font-bold text-white">
                Score: {score}/{questionNum}
            </h1>
            <h1 className="text-center text-5xl md:text-6xl font-bold text-white">
                Percentage: {percentage}
            </h1>
        </div>
    );
}
