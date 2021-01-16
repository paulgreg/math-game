import './Difficulty.css'
import {
    MULTIPLY_INT_1_NUMBER,
    MULTIPLY_INT_2_NUMBER,
    MULTIPLY_SIMPLE_FLOAT_NUMBER,
} from './MathUtils'

export default function Difficulty({
    difficulty,
    onDifficultyChange = () => {},
}) {
    const onChange = (e) => {
        const v = e.target.value
        onDifficultyChange(v)
    }
    return (
        <div className="difficulty">
            Difficulty :
            {[
                {
                    value: MULTIPLY_INT_1_NUMBER,
                    label: 'like 2 x 5',
                },
                {
                    value: MULTIPLY_INT_2_NUMBER,
                    label: 'like 32 x 3',
                },

                {
                    value: MULTIPLY_SIMPLE_FLOAT_NUMBER,
                    label: 'like 0.001 x 2',
                },
            ].map(({ value, label }) => (
                <label className="difficulty-option">
                    <input
                        type="radio"
                        name="difficulty"
                        onChange={onChange}
                        checked={difficulty === value}
                        value={value}
                    ></input>{' '}
                    {value === difficulty}
                    {label}
                </label>
            ))}
        </div>
    )
}
