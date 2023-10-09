import { AnswerStatus, QuestType } from '../../constants';
import { Answer } from '../../interfaces/quest.interface';
import { ReactComponent as CloudSVG } from './cloud.svg';
import './style.css';
import { useRef } from 'react';

type AnswerProps = {
    type: QuestType;
    answer: Answer;
    selectAnswer: (select: number) => void;
}

export const AnswerComponent = ({ answer, selectAnswer, type }: AnswerProps) => {
    const degRef = useRef<number>(Math.floor(Math.random() * 360 - 180));

    const additionalClasses = ''
    + answer.status === AnswerStatus.CORRECT ? ' answer-correct' : ''
    + answer.status === AnswerStatus.WRONG ? ' answer-wrong' : '';

    switch (type) {
        case QuestType.IMAGES:
            return <div className='answer-images'>
                <CloudSVG style={{
                    transform: `rotate(${degRef.current}deg)`
                }} />
                <div
                    className={'answer' + additionalClasses}
                    key={answer.id}
                    onClick={() => selectAnswer(answer.id)}
                >{answer.id}</div>
            </div>;

        case QuestType.ONE_IMAGE:
            return <div>
                <CloudSVG />
                <div
                    className={'answer' + additionalClasses}
                    key={answer.id}
                    onClick={() => selectAnswer(answer.id)}
                >{answer.description}</div>
            </div>;

        default:
            return <div
                className={'answer answer-text' + additionalClasses}
                key={answer.id}
                onClick={() => selectAnswer(answer.id)}
            >{answer.description}</div>;
    }
};