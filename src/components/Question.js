import { useEffect, useState } from 'react'
import './Question.css'

export default function Question({ x, y, onSubmit = () => {} }) {
    const [value, setValue] = useState()
    useEffect(() => setValue(''), [x, y])

    const onNumberChange = (e) => {
        const nb = parseInt(e.target.value, 10) || ''
        setValue(nb)
        onSubmit(nb)
    }

    return (
        <div className="question">
            {x} x {y} =
            <input
                type="text"
                name="answer"
                value={value}
                onChange={onNumberChange}
                className="question-answer"
                autoFocus
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength="4"
            />{' '}
            ?
        </div>
    )
}
