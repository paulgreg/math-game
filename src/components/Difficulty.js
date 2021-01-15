import { useState } from 'react'
import './Difficulty.css'

export default function Difficulty({ onDifficultyChange = () => {} }) {
    const [difficulty, setDifficulty] = useState(1)
    const onChange = (e) => {
        const v = parseInt(e.target.value, 10)
        setDifficulty(v)
        onDifficultyChange(v)
    }
    return (
        <div className="difficulty">
            Difficulty :
            <label className="difficulty-option">
                <input
                    type="radio"
                    name="difficulty"
                    onChange={onChange}
                    checked={difficulty === 1}
                    value={1}
                ></input>
                1 number
            </label>
            <label className="difficulty-option">
                <input
                    type="radio"
                    name="difficulty"
                    onChange={onChange}
                    checked={difficulty === 2}
                    value={2}
                ></input>
                2 numbers
            </label>
        </div>
    )
}
