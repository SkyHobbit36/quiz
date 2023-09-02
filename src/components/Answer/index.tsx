import { AnswerStatus } from "../../constants";
import { Answer } from "../../interfaces/quest.interface";
import { ReactComponent as CloudSVG } from "./cloud.svg";

type TextAnswerProps = {
    answer: Answer;
    selectAnswer: (select: number) => void;
}

export function AnswerComp({ answer, selectAnswer }: TextAnswerProps) {
    return <div>
        <CloudSVG />
        <div className={
            `answer`
            + `${answer.checked ? ' answer-checked' : ''}`
            + `${answer.status === AnswerStatus.CORRECT ? ' answer-correct' : ''}`
            + `${answer.status === AnswerStatus.WRONG ? ' answer-wrong' : ''}`
        } key={answer.id} onClick={() => selectAnswer(answer.id)}>{answer.description}</div>
    </div>
}