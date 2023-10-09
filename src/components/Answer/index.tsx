import { AnswerStatus, QuestType } from '../../constants';
import { ReactComponent as CloudSVG } from './cloud.svg';
import './style.css';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { AnswerStore } from '../../store/answer.ts';

type AnswerProps = {
    type: QuestType;
    answer: AnswerStore;
}

export const AnswerComponent = observer(({ answer, type }: AnswerProps) => {
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
                    onClick={() => answer.check()}
                >{answer.id}</div>
            </div>;

        case QuestType.ONE_IMAGE:
            return <div>
                <CloudSVG />
                <div
                    className={'answer' + additionalClasses}
                    key={answer.id}
                    onClick={() => answer.check()}
                >{answer.description}</div>
            </div>;

        default:
            return <div
                className={'answer answer-text' + additionalClasses}
                key={answer.id}
                onClick={() => answer.check()}
            >{answer.description}</div>;
    }
});