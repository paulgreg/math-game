import { useState } from 'react'
import './Difficulty.css'

export default function Difficulty({ onDifficultyChange = () => {} }) {
    const [difficulty, setDifficulty] = useState(1)
    const onChange = (e) => {
        const difficulty = parseInt(e.target.value, 10)
        setDifficulty(difficulty)
        onDifficultyChange(difficulty)
    }
    return (
        <label className="difficulty">
            Difficulty : <strong>{difficulty}</strong>
            <input
                type="range"
                className="difficulty-range"
                name="difficulty"
                value={difficulty}
                min="1"
                max="3"
                onChange={onChange}
            ></input>
        </label>
    )
}
