export interface Answer {
    id: number;
    description: string;
    checked?: boolean;
}

export interface Quest {
    question: string;
    answers: Answer[];
}