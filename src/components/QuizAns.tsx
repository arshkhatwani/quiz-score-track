import AnsBtn from "./AnsBtn";
import QuestionNum from "./QuestionNum";

export default function QuizAns() {
    return (
        <div className="pt-20">
            <QuestionNum />

            <div className="mt-40 flex justify-evenly">
                <AnsBtn label="Correct" />
                <AnsBtn label="Incorrect" />
            </div>
        </div>
    );
}
