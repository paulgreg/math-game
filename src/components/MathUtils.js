export const MULTIPLY_INT_1_NUMBER = 'MULTIPLY_INT_1_NUMBER'
export const MULTIPLY_INT_2_NUMBER = 'MULTIPLY_INT_2_NUMBER'
export const MULTIPLY_SIMPLE_FLOAT_NUMBER = 'MULTIPLY_SIMPLE_FLOAT_NUMBER'

export const getRandomSimpleFloat = () => {
    const power = getRandomInt(1, 3)
    return 1 / Math.pow(10, power)
}

export const getRandomInt = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

export const getNumber = ({
    difficulty = MULTIPLY_INT_1_NUMBER,
    min = 2,
} = {}) => {
    switch (difficulty) {
        case MULTIPLY_SIMPLE_FLOAT_NUMBER:
            return getRandomSimpleFloat()
        case MULTIPLY_INT_2_NUMBER:
            return getRandomInt(min, 100)
        case MULTIPLY_INT_1_NUMBER:
        default:
            return getRandomInt(min, 10)
    }
}

export const checkResult = (x, y, result) => {
    const parsedResult = parseFloat((result || '').replace(',', '.'))
    console.log(parsedResult)
    return Math.abs(parsedResult - x * y) < 0.000000001
}
