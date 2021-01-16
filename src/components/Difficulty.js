import { useState } from 'react'
import './Difficulty.css'

export default function Difficulty({ onDifficultyChange = () => {} }) {
    const [difficulty, setDifficulty] = useState('d1')
    const onChange = (e) => {
        const v = e.target.value
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
                    checked={difficulty === 'd1'}
                    value="d1"
                ></input>
                2 to 10
            </label>
            <label className="difficulty-option">
                <input
                    type="radio"
                    name="difficulty"
                    onChange={onChange}
                    checked={difficulty === 'd2'}
                    value="d2"
                ></input>
                2 to 99
            </label>
            <label className="difficulty-option">
                <input
                    type="radio"
                    name="difficulty"
                    onChange={onChange}
                    checked={difficulty === 'f1'}
                    value="f1"
                ></input>
                0.1, 0.01, etc
            </label>
        </div>
    )
}
