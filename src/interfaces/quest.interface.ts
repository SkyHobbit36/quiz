import { AnswerStatus, QuestType } from '../constants';

export interface Answer {
    id: number;
    questId?: number;
    description?: string;
    status?: AnswerStatus;
}

export interface Quest {
    id: number;
    type: QuestType;
    question: string;
    answers: Answer[];
}