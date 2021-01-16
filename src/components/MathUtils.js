export const getRandomSimpleFloat = () => {
    const power = getRandomInt(1, 3)
    return 1 / Math.pow(10, power)
}

export const getRandomInt = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

export const getNumber = ({ difficulty = 'd1', min = 2 } = {}) => {
    switch (difficulty) {
        case 'f1':
            return getRandomSimpleFloat()
        case 'd2':
            return getRandomInt(min, 100)
        case 'd1':
        default:
            return getRandomInt(min, 10)
    }
}

export const checkResult = (x, y, result) => {
    return Math.abs(parseFloat(result) - x * y) < 0.000000001
}
