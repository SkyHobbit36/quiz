import './style.css';
import { questList } from '../../data';
import { useEffect, useState } from "react";
import { Quest } from "../../interfaces/quest.interface";

export function QuestComponent() {
    const [quest, setQuest] = useState<Quest>();
    useEffect(() => {
        setQuest(questList[0]);
    }, []);

    function selectAnswer(select: number) {
        if (!quest) {
            return;
        }

        const newAnswers = quest.answers.map(answer => ({
            ...answer,
            checked: answer.id === select,
        }));

        setQuest({
            ...quest,
            answers: newAnswers,
        });
    }

    return <div className="quest">
        <div className="question">{quest?.question}</div>
        <div className="answer-list">
            {quest?.answers.map(quest => (
                <div className={
                    `answer` + `${quest.checked ? ' answer-checked' : ''}`
                } key={quest.id} onClick={() => selectAnswer(quest.id)}>{quest.description}</div>
            ))}
        </div>
    </div>;
}