import { useEffect, useState } from 'react'
import { getOperation } from './MathUtils'
import './Question.css'

export default function Question({
    x,
    y,
    difficulty,
    disabled = false,
    onSubmit = () => {},
}) {
    const [value, setValue] = useState('')
    useEffect(() => setValue(''), [x, y])

    const onNumberChange = (e) => {
        if (!disabled) {
            const nb = e.target.value
            setValue(nb)
            onSubmit(nb)
        }
    }

    return (
        <div className="question">
            <span className="question-q">
                {x} {getOperation(difficulty)} {y} ={' '}
            </span>
            <input
                type="text"
                name="answer"
                value={value}
                onChange={onNumberChange}
                className="question-answer"
                autoFocus
                pattern="[\.,0-9]*"
                inputMode="numeric"
                maxLength="8"
            />{' '}
            ?
        </div>
    )
}
