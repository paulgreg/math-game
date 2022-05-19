import {
    checkResult,
    getOperation,
    getRandomInt,
    getRandomSimpleFloat,
    getRandomFloat,
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
    ADD_INT_1_NUMBER,
    DIVIDE_INT_2_NUMBER,
    SUBSTRACT_INT_1_NUMBER,
    SUBSTRACT_INT_2_NUMBER,
    SUBSTRACT_INT_3_NUMBER,
    SUBSTRACT_NEGATIVE_INT_1_NUMBER,
    SUBSTRACT_INT_FROM_TEN_NUMBER,
} from './MathUtils'

describe('MathUtils', () => {
    describe('getRandomInt', () => {
        ;[
            { min: 0, max: 10, rnd: 0, output: 0 },
            { min: 1, max: 10, rnd: 0.12345, output: 2 },
            { min: 1, max: 10, rnd: 0.567, output: 6 },
            { min: 1, max: 10, rnd: 0, output: 1 },
            { min: 1, max: 10, rnd: 1, output: 10 },
            { min: 100, max: 1000, rnd: 0.5, output: 550 },
        ].forEach(({ min, max, rnd, output }) =>
            test(`should return ${output} if Math.round(${rnd} * (${max} - ${min}) + min)`, () =>
                expect(getRandomInt(min, max, rnd)).toEqual(output))
        )
        test('should return a number between limits', () => {
            const n = getRandomInt(1, 2)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(2)
        })
    })
    describe('getRandomSimpleFloat', () => {
        ;[
            { input: 1, output: 0.1 },
            { input: 2, output: 0.01 },
            { input: 3, output: 0.001 },
        ].forEach(({ input, output }) =>
            test(`should return ${output} if 1 / Math.pow(10, ${input})`, () =>
                expect(getRandomSimpleFloat(input)).toEqual(output))
        )

        test('should return a number like 0.1, 0.01, etc', () => {
            const n = getRandomSimpleFloat()
            expect(n).toBeLessThanOrEqual(1)
        })
    })
    describe('getRandomFloat', () => {
        test('should return a number like 142.542, 654.4', () => {
            const n = getRandomFloat()
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThan(1001)
        })
        ;[
            { n1: 1, n2: 10, power: 1, output: 2 },
            { n1: 1, n2: 10, power: 2, output: 1.1 },
            { n1: 10, n2: 10, power: 1, output: 11 },
            { n1: 10, n2: 123, power: 1, output: 22.3 },
            { n1: 123, n2: 12, power: 2, output: 123.12 },
            { n1: 444, n2: 555, power: 3, output: 444.555 },
            { n1: 999, n2: 999, power: 1, output: 1098.9 },
            { n1: 999, n2: 999, power: 3, output: 999.999 },
        ].forEach(({ n1, n2, power, output }) =>
            test(`should return ${output} if ${n1} + ${n2} / Math.pow(10, ${power})`, () =>
                expect(getRandomFloat(n1, n2, power)).toEqual(output))
        )
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
            {
                difficulty: SUBSTRACT_INT_1_NUMBER,
                x: 10,
                y: 6,
                result: '4',
                expected: true,
            },
            {
                difficulty: SUBSTRACT_INT_1_NUMBER,
                x: 10,
                y: 6,
                result: '1',
                expected: false,
            },
            {
                difficulty: SUBSTRACT_INT_FROM_TEN_NUMBER,
                x: 10,
                y: 5,
                result: '5',
                expected: true,
            },
            {
                difficulty: SUBSTRACT_INT_2_NUMBER,
                x: 20,
                y: 5,
                result: '15',
                expected: true,
            },
            {
                difficulty: SUBSTRACT_INT_2_NUMBER,
                x: 20,
                y: 5,
                result: '5',
                expected: false,
            },
            {
                difficulty: SUBSTRACT_INT_3_NUMBER,
                x: 200,
                y: 100,
                result: '100',
                expected: true,
            },
            {
                difficulty: SUBSTRACT_INT_3_NUMBER,
                x: 200,
                y: 100,
                result: '0',
                expected: false,
            },
            {
                difficulty: SUBSTRACT_NEGATIVE_INT_1_NUMBER,
                x: 5,
                y: 6,
                result: '-1',
                expected: true,
            },
            {
                difficulty: SUBSTRACT_NEGATIVE_INT_1_NUMBER,
                x: 5,
                y: 6,
                result: '0',
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
