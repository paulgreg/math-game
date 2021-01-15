import './Chronometer.css'
import { useEffect, useState } from 'react'

export default function Chronometer({ x, y, show }) {
    const [initial, setInitial] = useState(Date.now())
    const [lastTime, setLastTime] = useState()
    const [count, setCount] = useState(0)
    const [times, setTimes] = useState(0)

    useEffect(() => {
        if (show) {
            const time = (Date.now() - initial) / 1000
            setLastTime(time)
            setCount(count + 1)
            setTimes(times + time)
        }
    }, [show])

    useEffect(() => {
        setInitial(Date.now())
    }, [x, y])

    return lastTime ? (
        <div className="chronometer">
            <div>Time : {lastTime.toFixed(1)} sec.</div>
            <div>Average : {(times / count).toFixed(1)} sec.</div>
        </div>
    ) : null
}
