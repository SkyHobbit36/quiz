const solutions = [
    1,
]

export function checkSolution(questId: number, value: number) {
    return value === solutions[questId];
}