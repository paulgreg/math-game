export const ADD_INT_SIMPLE_NUMBER = 'ADD_INT_SIMPLE_NUMBER'
export const ADD_INT_1_NUMBER = 'ADD_INT_1_NUMBER'
export const ADD_INT_2_NUMBER = 'ADD_INT_2_NUMBER'
export const ADD_INT_3_NUMBER = 'ADD_INT_3_NUMBER'
export const MULTIPLY_INT_1_NUMBER = 'MULTIPLY_INT_1_NUMBER'
export const MULTIPLY_INT_2_NUMBER = 'MULTIPLY_INT_2_NUMBER'
export const MULTIPLY_SIMPLE_FLOAT_NUMBER = 'MULTIPLY_SIMPLE_FLOAT_NUMBER'
export const DIVIDE_SIMPLE_FLOAT_NUMBER = 'DIVIDE_SIMPLE_FLOAT_NUMBER'
export const DIVIDE_INT_2_NUMBER = 'DIVIDE_INT_2_NUMBER'

export const getRandomSimpleFloat = () => {
    const power = getRandomInt(1, 3)
    return 1 / Math.pow(10, power)
}

export const getRandomFloat = () => {
    return (
        getRandomInt(1, 999) +
        getRandomInt(1, 999) / Math.pow(10, getRandomInt(0, 3))
    )
}

export const getRandomInt = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

export const generateNumbers = (difficulty) => {
    switch (difficulty) {
        case MULTIPLY_SIMPLE_FLOAT_NUMBER:
            return [getRandomSimpleFloat(), getRandomFloat()]
        case DIVIDE_SIMPLE_FLOAT_NUMBER:
            return [getRandomFloat(), getRandomSimpleFloat()]
        case DIVIDE_INT_2_NUMBER:
            const x = getRandomInt(2, 10)
            return [getRandomInt(2, 9) * x, x]
        case MULTIPLY_INT_2_NUMBER:
        case ADD_INT_2_NUMBER:
            return [getRandomInt(10, 100), getRandomInt(2, 10)]
        case ADD_INT_3_NUMBER:
            return [getRandomInt(100, 1000), getRandomInt(2, 10)]
        case ADD_INT_SIMPLE_NUMBER:
            return [getRandomInt(0, 5), getRandomInt(1, 5)]
        case MULTIPLY_INT_1_NUMBER:
        case ADD_INT_1_NUMBER:
            return [getRandomInt(2, 10), getRandomInt(2, 10)]
        default:
            throw new Error('difficulty is not set')
    }
}

export const getOperation = (difficulty) => {
    switch (difficulty) {
        case DIVIDE_INT_2_NUMBER:
        case DIVIDE_SIMPLE_FLOAT_NUMBER:
            return '÷'
        case MULTIPLY_INT_1_NUMBER:
        case MULTIPLY_INT_2_NUMBER:
        case MULTIPLY_SIMPLE_FLOAT_NUMBER:
            return 'x'
        case ADD_INT_SIMPLE_NUMBER:
        case ADD_INT_1_NUMBER:
        case ADD_INT_2_NUMBER:
        case ADD_INT_3_NUMBER:
        default:
            return '+'
    }
}

const compute = ({ difficulty, x, y }) => {
    switch (getOperation(difficulty)) {
        case 'x':
            return x * y
        case '÷':
            return x / y
        case '+':
            return x + y
        default:
            throw new Error('difficulty is not set')
    }
}

export const checkResult = ({ difficulty, x, y, result }) => {
    const parsedResult = parseFloat((result || '').replace(',', '.'))
    const computedResult = compute({ difficulty, x, y })
    return Math.abs(parsedResult - computedResult) < 0.000000001
}
