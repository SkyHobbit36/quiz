import { ReactNode } from 'react';
import { QuestType } from '../../constants';
import './style.css';

type AnswerListProps = {
    type: QuestType;
    children: ReactNode;
}

export function AnswerList({ type, children }: AnswerListProps) {
    switch (type) {
        case QuestType.IMAGES:
            return <div className='answer-list answer-list-images'>{children}</div>;

        case QuestType.ONE_IMAGE:
            return <div className='answer-list answer-list-images'>{children}</div>;

        default:
            return <div className='answer-list answer-list-text'>{children}</div>;
    }
}