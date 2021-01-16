export const ADD_INT_1_NUMBER = 'ADD_INT_1_NUMBER'
export const ADD_INT_2_NUMBER = 'ADD_INT_2_NUMBER'
export const ADD_INT_3_NUMBER = 'ADD_INT_3_NUMBER'
export const MULTIPLY_INT_1_NUMBER = 'MULTIPLY_INT_1_NUMBER'
export const MULTIPLY_INT_2_NUMBER = 'MULTIPLY_INT_2_NUMBER'
export const MULTIPLY_SIMPLE_FLOAT_NUMBER = 'MULTIPLY_SIMPLE_FLOAT_NUMBER'

export const getRandomSimpleFloat = () => {
    const power = getRandomInt(1, 3)
    return 1 / Math.pow(10, power)
}

export const getRandomInt = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

export const getNumber = ({ difficulty = MULTIPLY_INT_1_NUMBER } = {}) => {
    switch (difficulty) {
        case MULTIPLY_SIMPLE_FLOAT_NUMBER:
            return getRandomSimpleFloat()
        case MULTIPLY_INT_2_NUMBER:
        case ADD_INT_2_NUMBER:
            return getRandomInt(10, 100)
        case ADD_INT_3_NUMBER:
            return getRandomInt(100, 1000)
        case MULTIPLY_INT_1_NUMBER:
        default:
            return getRandomInt(2, 10)
    }
}

export const getOperation = (difficulty) => {
    switch (difficulty) {
        case MULTIPLY_INT_1_NUMBER:
        case MULTIPLY_INT_2_NUMBER:
        case MULTIPLY_SIMPLE_FLOAT_NUMBER:
            return 'x'
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
        case '+':
        default:
            return x + y
    }
}

export const checkResult = ({ difficulty, x, y, result }) => {
    const parsedResult = parseFloat((result || '').replace(',', '.'))
    const computedResult = compute({ difficulty, x, y })
    return Math.abs(parsedResult - computedResult) < 0.000000001
}
