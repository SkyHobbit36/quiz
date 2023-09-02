import './style.css';
import { questList } from '../../data';
import { useState } from "react";
import { Quest } from "../../interfaces/quest.interface";
import { checkSolution } from '../../utils/solutions';
import { AnswerStatus } from '../../constants/answer-status.enum';
import { ButtonNext } from '../../components/common/ButtonNext';

export function QuestComponent() {
    const [quest, setQuest] = useState<Quest>(questList[0]);

    function selectAnswer(select: number) {
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
                    }
                }
                return answer;
            }),
        });
    }

    return <div className="quest">
        <div className="question">{quest?.question}</div>
        <ButtonNext />
        <div className="answer-list">
            {quest?.answers.map((quest) => (
                <div className={
                    `answer`
                    + `${quest.checked ? ' answer-checked' : ''}`
                    + `${quest.status === AnswerStatus.CORRECT ? ' answer-correct' : ''}`
                    + `${quest.status === AnswerStatus.WRONG ? ' answer-wrong' : ''}`
                } key={quest.id} onClick={() => selectAnswer(quest.id)}>{quest.description}</div>
            ))}
        </div>
    </div>;
}