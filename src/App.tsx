import { useRecoilValue } from "recoil";
import "./App.css";
import QuizAns from "./components/QuizAns";
import QuizStatus from "./components/QuizStatus";
import Result from "./components/Result";
import { activeQuestionState } from "./states";

function App() {
    const activeQuestion = useRecoilValue(activeQuestionState);

    return (
        <div className="flex flex-col justify-between min-h-screen py-5">
            {activeQuestion ? <QuizAns /> : <Result />}

            <QuizStatus />
        </div>
    );
}

export default App;
