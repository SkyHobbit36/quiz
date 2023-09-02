const solutions = [
    1,
    3,
];

export function checkSolution(questId: number, value: number) {
    return value === solutions[questId];
}