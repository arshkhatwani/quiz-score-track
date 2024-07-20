import { useRecoilValue } from "recoil";
import "./App.css";
import QuizAns from "./components/QuizAns";
import Result from "./components/Result";
import StatusBtn from "./components/StatusBtn";
import { activeQuestionState } from "./states";

function App() {
    const activeQuestion = useRecoilValue(activeQuestionState);

    return (
        <div className="flex flex-col justify-between min-h-screen py-5">
            {activeQuestion ? <QuizAns /> : <Result />}

            <div className="flex justify-evenly gap-20">
                <StatusBtn label="Reset" />
                {activeQuestion ? <StatusBtn label="Complete" /> : <></>}
            </div>
        </div>
    );
}

export default App;
