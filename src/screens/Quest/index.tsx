import './style.css';

export function Quest() {
    return <div className="quest">
        <div className="question">Очень важный вопрос. Когда?</div>
        <ol className="answer-list">
            <li className="answer">1. Да</li>
            <li className="answer">2. Понятия не имею. Игра ваша гавно. Я в ней не учавствую.</li>
            <li className="answer">3. Нет</li>
            <li className="answer">4. Я отказываюсь отвечать без моего адвоката.</li>
        </ol>
    </div>;
}