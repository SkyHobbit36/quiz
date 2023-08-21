import { Quest } from "./interfaces/quest.interface";

export const questList: Quest[] = [
    {
        question: 'Очень важный вопрос. Когда?',
        answers: [
            {
                id: 1,
                description: '1. Да',
            },
            {
                id: 2,
                description: '2. Понятия не имею. Игра ваша гавно. Я в ней не учавствую.',
            },
            {
                id: 3,
                description: '3. Нет',
            },
            {
                id: 4,
                description: '4. Я отказываюсь отвечать без моего адвоката.',
            },
        ]
    },
]