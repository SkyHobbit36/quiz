import { AnswerStatus } from "../constants";

export interface Answer {
    id: number;
    status: AnswerStatus;
    description: string;
    checked?: boolean;
}

export interface Quest {
    id: number;
    question: string;
    answers: Answer[];
}