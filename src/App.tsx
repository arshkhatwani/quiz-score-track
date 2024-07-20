import "./App.css";
import AnsBtn from "./components/AnsBtn";
import QuestionNum from "./components/QuestionNum";
import StatusBtn from "./components/StatusBtn";

function App() {
    return (
        <div className="flex flex-col justify-between min-h-screen py-5">
            <div className="pt-20">
                <QuestionNum />

                <div className="mt-40 flex justify-evenly">
                    <AnsBtn label="Correct" />
                    <AnsBtn label="Incorrect" />
                </div>
            </div>

            <div className="flex justify-evenly gap-20">
                <StatusBtn label="Reset" />
                <StatusBtn label="Complete" />
            </div>
        </div>
    );
}

export default App;
