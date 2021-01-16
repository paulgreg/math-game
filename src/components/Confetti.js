import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import './Confetti.css'

export default function Confetti({ win }) {
    const [enabled, setEnabled] = useState(true)
    useEffect(() => {
        win &&
            enabled &&
            confetti({
                particleCount: 80,
                spread: 50,
                origin: { y: 0.6 },
            })
    }, [win, enabled])

    const onChange = (e) => setEnabled(e.target.checked)

    return (
        <label className="confetti">
            <input
                type="checkbox"
                checked={enabled}
                onChange={onChange}
            ></input>
            Confetti ?
        </label>
    )
}
