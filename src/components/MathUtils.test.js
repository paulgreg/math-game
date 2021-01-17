import {
    checkResult,
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
    getOperation,
    ADD_INT_1_NUMBER,
    getRandomInt,
    getRandomSimpleFloat,
    getRandomFloat,
    DIVIDE_INT_2_NUMBER,
} from './MathUtils'

describe('MathUtils', () => {
    describe('getRandomInt', () => {
        test('should return a number between limits', () => {
            const n = getRandomInt(1, 2)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(2)
        })
    })
    describe('getRandomSimpleFloat', () => {
        test('should return a number like 0.1, 0.01, etc', () => {
            const n = getRandomSimpleFloat()
            expect(n).toBeLessThanOrEqual(1)
        })
    })
    describe('getRandomFloat', () => {
        test('should return a number like 142.542, 654.4', () => {
            const n = getRandomFloat()
            expect(n).toBeGreaterThanOrEqual(100)
            expect(n).toBeLessThan(1001)
        })
    })
    describe('check', () =>
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
            {
                difficulty: DIVIDE_INT_2_NUMBER,
                x: 30,
                y: 5,
                result: '6',
                expected: true,
            },
            {
                difficulty: DIVIDE_INT_2_NUMBER,
                x: 30,
                y: 5,
                result: '1',
                expected: false,
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
