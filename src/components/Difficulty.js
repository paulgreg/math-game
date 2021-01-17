import './Difficulty.css'
import {
    ADD_INT_1_NUMBER,
    ADD_INT_2_NUMBER,
    ADD_INT_3_NUMBER,
    getRandomInt,
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_INT_2_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
} from './MathUtils'
import { load, save } from './store'

export const pickRandomDifficulty = (difficulties) => {
    const availableDifficulties = Object.entries(difficulties)
        .filter(([_, value]) => value)
        .map(([key, value]) => key)
    return availableDifficulties[getRandomInt(0, availableDifficulties.length)]
}

const labels = {
    ADD_INT_1_NUMBER: 'like 2 + 5',
    ADD_INT_2_NUMBER: 'like 53 + 9',
    ADD_INT_3_NUMBER: 'like 532 + 3',
    MULTIPLY_INT_1_NUMBER: 'like 2 x 5',
    MULTIPLY_INT_2_NUMBER: 'like 32 x 3',
    MULTIPLY_SIMPLE_FLOAT_NUMBER: 'like 0.001 x 2',
}

export const getDefaultDifficulties = () => {
    const savedDifficulty = load()
    return (
        savedDifficulty || {
            [ADD_INT_1_NUMBER]: false,
            [ADD_INT_2_NUMBER]: false,
            [ADD_INT_3_NUMBER]: false,
            [MULTIPLY_INT_1_NUMBER]: true,
            [MULTIPLY_INT_2_NUMBER]: false,
            [MULTIPLY_SIMPLE_FLOAT_NUMBER]: false,
        }
    )
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
            Difficulty :
            {Object.entries(difficulties).map(([key, value]) => (
                <label className="difficulties-option" key={key}>
                    <input
                        type="checkbox"
                        name="difficulties"
                        onChange={onChange}
                        value={key}
                        checked={value}
                    ></input>{' '}
                    {labels[key]}
                </label>
            ))}
        </div>
    )
}
