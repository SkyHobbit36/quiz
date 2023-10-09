import './style.css';
import { questList } from '../../data';
import { ButtonNext } from '../../components/common/ButtonNext';
import { AnswerComponent } from '../../components/Answer';
import { AnswerList } from '../../components/AnswerList';
import { AnswerStore } from '../../store/answer.ts';

export function QuestComponent() {
    const quest = questList[1];

    const answerList = quest?.answers.map((answer) => {
        const answerStore = new AnswerStore(answer.id, quest.id, answer.description);
        return <AnswerComponent
            answer={answerStore}
            type={quest?.type}
            key={answer.id}
        />;
    });

    return <div className="quest">
        <div className="question">{quest?.question}</div>
        <ButtonNext />
        <AnswerList type={quest?.type}>{answerList}</AnswerList>
    </div>;
}