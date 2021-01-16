import './Chronometer.css'
import { useEffect, useState } from 'react'

function getClassNameAccordintToTime(t) {
    if (t < 3) return 'fast'
    if (t < 6) return 'medium'
    if (t < 9) return 'long'
    return 'verylong'
}

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
    if (!lastTime) return null

    const time = lastTime.toFixed(1)
    const average = (times / count).toFixed(1)

    return (
        <div className="chronometer">
            <div>
                Time :{' '}
                <span className={getClassNameAccordintToTime(time)}>
                    {time} sec.
                </span>
            </div>
            <div>
                Average :{' '}
                <span className={getClassNameAccordintToTime(average)}>
                    {average} sec.
                </span>
            </div>
        </div>
    )
}
