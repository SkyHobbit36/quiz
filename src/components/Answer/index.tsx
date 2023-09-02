import { AnswerStatus, QuestType } from '../../constants';
import { Answer } from '../../interfaces/quest.interface';
import { ReactComponent as CloudSVG } from './cloud.svg';
import './style.css';

type TextAnswerProps = {
    type: QuestType;
    answer: Answer;
    selectAnswer: (select: number) => void;
}

export function AnswerComponent({ answer, selectAnswer, type }: TextAnswerProps) {
    switch (type) {
        case QuestType.IMAGES:
            return <div>
                <CloudSVG />
                <div className={
                    'answer'
                    + `${answer.checked ? ' answer-checked' : ''}`
                    + `${answer.status === AnswerStatus.CORRECT ? ' answer-correct' : ''}`
                    + `${answer.status === AnswerStatus.WRONG ? ' answer-wrong' : ''}`
                } key={answer.id} onClick={() => selectAnswer(answer.id)}>{answer.description}</div>
            </div>;
            break;

        case QuestType.ONE_IMAGE:
            return <div>
                <CloudSVG />
                <div className={
                    'answer'
                    + `${answer.checked ? ' answer-checked' : ''}`
                    + `${answer.status === AnswerStatus.CORRECT ? ' answer-correct' : ''}`
                    + `${answer.status === AnswerStatus.WRONG ? ' answer-wrong' : ''}`
                } key={answer.id} onClick={() => selectAnswer(answer.id)}>{answer.description}</div>
            </div>;
            break;
        default:
            return <div>
                <CloudSVG />
                <div className={
                    'answer'
                    + `${answer.checked ? ' answer-checked' : ''}`
                    + `${answer.status === AnswerStatus.CORRECT ? ' answer-correct' : ''}`
                    + `${answer.status === AnswerStatus.WRONG ? ' answer-wrong' : ''}`
                } key={answer.id} onClick={() => selectAnswer(answer.id)}>{answer.description}</div>
            </div>;
            break;
    }

}