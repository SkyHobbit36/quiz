import { AnswerStatus, QuestType } from '../constants';

export interface Answer {
    id: number;
    status: AnswerStatus;
    description: string;
    checked?: boolean;
}

export interface Quest {
    id: number;
    type: QuestType;
    question: string;
    answers: Answer[];
}