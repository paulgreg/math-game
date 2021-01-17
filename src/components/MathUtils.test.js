import {
    generateNumber,
    checkResult,
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_INT_2_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
    getOperation,
    ADD_INT_1_NUMBER,
} from './MathUtils'

describe('MathUtils', () => {
    describe('generateNumbers', () => {
        describe('by default', () => {
            test('should return a number > 2 and < 11', () => {
                const n = generateNumber()
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThan(11)
            })
        })
        describe('with difficulty MULTIPLY_INT_1_NUMBER', () => {
            test('should return a number >= 2 and <= 10', () => {
                const n = generateNumber(MULTIPLY_INT_1_NUMBER)
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThanOrEqual(10)
            })
        })
        describe('with difficulty MULTIPLY_INT_2_NUMBER', () => {
            test('should return a number >= 2 and <= 100', () => {
                const n = generateNumber(MULTIPLY_INT_2_NUMBER)
                expect(n).toBeGreaterThanOrEqual(2)
                expect(n).toBeLessThanOrEqual(100)
            })
        })
        describe('with difficulty MULTIPLY_SIMPLE_FLOAT_NUMBER', () => {
            test('should return a number like 0.1, 0.01, etc', () => {
                const n = generateNumber(MULTIPLY_SIMPLE_FLOAT_NUMBER)
                expect(n).toBeLessThanOrEqual(1)
            })
        })
    })
    describe('check', () => {
        describe('for multiplication', () =>
            [
                {
                    difficulty: ADD_INT_1_NUMBER,
                    x: 1,
                    y: 1,
                    result: '2',
                    expected: true,
                },
                {
                    difficulty: ADD_INT_1_NUMBER,
                    x: 1,
                    y: 1,
                    result: '1',
                    expected: false,
                },
                {
                    difficulty: MULTIPLY_INT_1_NUMBER,
                    x: 2,
                    y: 2,
                    result: '4',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_INT_1_NUMBER,
                    x: 2,
                    y: 2,
                    result: '5',
                    expected: false,
                },
                {
                    difficulty: MULTIPLY_INT_1_NUMBER,
                    x: 2,
                    y: 10,
                    result: '20',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_INT_1_NUMBER,
                    x: 2,
                    y: 10,
                    result: '1',
                    expected: false,
                },
                {
                    difficulty: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    x: 3,
                    y: 0.1,
                    result: '0.3',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    x: 3,
                    y: 0.1,
                    result: '0,3',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    x: 3,
                    y: 0.01,
                    result: '0.03',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    x: 3,
                    y: 0.001,
                    result: '0.003',
                    expected: true,
                },
                {
                    difficulty: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    x: 3,
                    y: 0.0001,
                    result: '0.0003',
                    expected: true,
                },
            ].forEach(({ difficulty, x, y, result, expected }) =>
                test(`should return ${expected} for ${x} ${getOperation(
                    difficulty
                )} ${y} === ${result}`, () =>
                    expect(checkResult({ difficulty, x, y, result })).toBe(
                        expected
                    ))
            ))
    })
})
