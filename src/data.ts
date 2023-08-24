import { AnswerStatus } from "./constants/answer-status.enum";
import { Quest } from "./interfaces/quest.interface";

export const questList: Quest[] = [
    {
        id: 0,
        question: 'Очень важный вопрос. Когда?',
        answers: [
            {
                id: 1,
                status: AnswerStatus.NONE,
                description: '1. Да',
            },
            {
                id: 2,
                status: AnswerStatus.NONE,
                description: '2. Понятия не имею. Игра ваша гавно. Я в ней не учавствую.',
            },
            {
                id: 3,
                status: AnswerStatus.NONE,
                description: '3. Нет',
            },
            {
                id: 4,
                status: AnswerStatus.NONE,
                description: '4. Я отказываюсь отвечать без моего адвоката.',
            },
        ]
    },
]