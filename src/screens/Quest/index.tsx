import './style.css';
import { questList } from '../../data';
import { useState } from 'react';
import { Quest } from '../../interfaces/quest.interface';
import { checkSolution } from '../../utils/solutions';
import { AnswerStatus } from '../../constants';
import { ButtonNext } from '../../components/common/ButtonNext';
import { AnswerComponent } from '../../components/Answer';
import { AnswerList } from '../../components/AnswerList';

export function QuestComponent() {
    console.log('Render QuestComponent');
    const [quest, setQuest] = useState<Quest>(questList[1]);

    const selectAnswer = (select: number) => {
        if (!quest) {
            return;
        }

        const isSolution = checkSolution(quest.id, select);

        setQuest({
            ...quest,
            answers: quest.answers.map(answer => {
                if (answer.id === select) {
                    return {
                        ...answer,
                        status: isSolution ? AnswerStatus.CORRECT : AnswerStatus.WRONG,
                    };
                }
                return answer;
            }),
        });
    };

    return <div className="quest">
        <div className="question">{quest?.question}</div>
        <ButtonNext />
        <AnswerList type={quest?.type}>
            {quest?.answers.map((answer) => <AnswerComponent
                selectAnswer={selectAnswer}
                answer={answer}
                type={quest?.type}
                key={answer.id}
            />)}
        </AnswerList>
    </div>;
}