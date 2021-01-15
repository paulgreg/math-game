import { useEffect, useState } from 'react'
import Difficulty from './Difficulty'
import './Form.css'

export default function Form({
    x,
    y,
    onSubmit = () => {},
    onDifficultyChange = () => {},
}) {
    const [value, setValue] = useState()
    useEffect(() => setValue(''), [x, y])

    const onFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(parseInt(value, 10))
    }

    const onNumberChange = (e) => setValue(e.target.value, 10)

    return (
        <form onSubmit={onFormSubmit} className="form">
            <span className="form-question">
                {x} x {y} =
                <input
                    type="text"
                    name="answer"
                    value={value}
                    onChange={onNumberChange}
                    className="form-answer"
                    autoFocus
                />{' '}
                ?
            </span>{' '}
            <Difficulty onDifficultyChange={onDifficultyChange} />
        </form>
    )
}
