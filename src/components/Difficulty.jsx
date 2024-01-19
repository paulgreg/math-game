import './Difficulty.css'
import {
    getRandomInt,
    ADD_INT_1_NUMBER,
    ADD_INT_10_NUMBER,
    ADD_INT_2_NUMBER,
    ADD_INT_3_NUMBER,
    ADD_INT_SIMPLE_NUMBER,
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_INT_2_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
    DIVIDE_INT_2_NUMBER,
    DIVIDE_SIMPLE_FLOAT_NUMBER,
    MULTIPLY_INT_TENS_NUMBER,
    DIVIDE_INT_TENS_NUMBER,
    SUBSTRACT_INT_1_NUMBER,
    SUBSTRACT_INT_FROM_TEN_NUMBER,
    SUBSTRACT_INT_2_NUMBER,
    SUBSTRACT_INT_3_NUMBER,
    SUBSTRACT_NEGATIVE_INT_1_NUMBER,
    SUBSTRACT_NEGATIVE_INT_2_NUMBER,
    ADD_INT_20_NUMBER,
} from './MathUtils'
import { getPoints } from './Score'
import { load, save } from './store'

export const pickRandomDifficulty = (difficulties) => {
    const availableDifficulties = Object.entries(difficulties)
        .filter(([_, value]) => value)
        .map(([key, value]) => key)
    return availableDifficulties[
        getRandomInt(0, availableDifficulties.length - 1)
    ]
}

const labels = {
    ADD_INT_SIMPLE_NUMBER: 'simple addition like 2 + 2',
    ADD_INT_1_NUMBER: 'addition like 6 + 9',
    ADD_INT_10_NUMBER: 'addition like 23 + 20',
    ADD_INT_20_NUMBER: 'addition like 23 + 70',
    ADD_INT_2_NUMBER: 'addition like 53 + 9',
    ADD_INT_3_NUMBER: 'addition like 532 + 3',
    SUBSTRACT_INT_1_NUMBER: 'simple substraction like 6 - 3',
    SUBSTRACT_INT_FROM_TEN_NUMBER: 'substraction from 10 like 10 - 3',
    SUBSTRACT_INT_2_NUMBER: 'substraction like 45 - 12',
    SUBSTRACT_INT_3_NUMBER: 'substraction like 211 - 122',
    SUBSTRACT_NEGATIVE_INT_1_NUMBER:
        'simple substraction with negative numbers like 4 - 6',
    SUBSTRACT_NEGATIVE_INT_2_NUMBER:
        'substraction with negative numbers like 12 - 22',
    MULTIPLY_INT_1_NUMBER: 'classic multiplication like 2 x 5',
    MULTIPLY_INT_2_NUMBER: 'multiplication like 32 x 3',
    DIVIDE_INT_2_NUMBER: 'classic division like 30 ÷  5',
    MULTIPLY_INT_TENS_NUMBER: 'multiplication with 10, 100, 1000',
    MULTIPLY_SIMPLE_FLOAT_NUMBER: 'multiplication like 23.111 x 0.001 ',
    DIVIDE_SIMPLE_FLOAT_NUMBER: 'division like 132.34 ÷ 0.01',
    DIVIDE_INT_TENS_NUMBER: 'division with 10, 100, 1000',
}

export const getDefaultDifficulties = () => {
    const savedDifficulty = load()
    return {
        [ADD_INT_SIMPLE_NUMBER]: false,
        [ADD_INT_1_NUMBER]: false,
        [ADD_INT_10_NUMBER]: false,
        [ADD_INT_20_NUMBER]: false,
        [ADD_INT_2_NUMBER]: false,
        [ADD_INT_3_NUMBER]: false,
        [SUBSTRACT_INT_1_NUMBER]: false,
        [SUBSTRACT_INT_FROM_TEN_NUMBER]: false,
        [SUBSTRACT_INT_2_NUMBER]: false,
        [SUBSTRACT_INT_3_NUMBER]: false,
        [SUBSTRACT_NEGATIVE_INT_1_NUMBER]: false,
        [SUBSTRACT_NEGATIVE_INT_2_NUMBER]: false,
        [MULTIPLY_INT_1_NUMBER]: true,
        [MULTIPLY_INT_2_NUMBER]: false,
        [MULTIPLY_INT_TENS_NUMBER]: false,
        [MULTIPLY_SIMPLE_FLOAT_NUMBER]: false,
        [DIVIDE_INT_2_NUMBER]: false,
        [DIVIDE_INT_TENS_NUMBER]: false,
        [DIVIDE_SIMPLE_FLOAT_NUMBER]: false,
        ...savedDifficulty,
    }
}

const checkAtLeastOneValue = (options) =>
    Object.values(options).find((v) => v) === true

export default function Difficulty({
    difficulties,
    onDifficultiesChange = () => {},
}) {
    const onChange = (e) => {
        const value = e.target.checked
        const newDifficulties = { ...difficulties, [e.target.value]: value }

        if (checkAtLeastOneValue(newDifficulties)) {
            onDifficultiesChange(newDifficulties)
            save(newDifficulties)
        }
    }
    return (
        <div className="difficulties">
            Operations :
            {Object.entries(difficulties).map(([key, value]) => (
                <label className="difficulties-option" key={key}>
                    <input
                        type="checkbox"
                        name="difficulties"
                        onChange={onChange}
                        value={key}
                        checked={value}
                    ></input>{' '}
                    {labels[key]}{' '}
                    <small className="difficulties-point">
                        {getPoints(key)} points
                    </small>
                </label>
            ))}
        </div>
    )
}
