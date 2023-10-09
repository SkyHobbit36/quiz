import { AnswerStatus } from '../constants.ts';
import { Answer } from '../interfaces/quest.interface.ts';
import { checkSolution } from '../utils/solutions.ts';
import { action, makeObservable, observable } from 'mobx';

export class AnswerStore implements Answer {
    id: number;
    questId: number;
    description?: string;
    status?: AnswerStatus = AnswerStatus.NONE;

    constructor(id: number, questId: number, description = '') {
        makeObservable(this, {
            status: observable,
            check: action,
        });

        this.id = id;
        this.questId = questId;
        this.description = description;
    }

    check() {
        const isSolution = checkSolution(this.questId, this.id);
        this.status = isSolution ? AnswerStatus.CORRECT : AnswerStatus.WRONG;
    }
}