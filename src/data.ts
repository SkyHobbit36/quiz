import { QuestType } from './constants';
import { Quest } from './interfaces/quest.interface';

export const questList: Quest[] = [
    {
        id: 0,
        question: 'Очень важный вопрос. Когда?',
        type: QuestType.TEXT,
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
    {
        id: 1,
        question: 'Еще один вопрос. На этот раз макисмально важный. Сколько?',
        type: QuestType.IMAGES,
        answers: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
        ]
    },
];