import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Score from './components/Score'
import Chronometer from './components/Chronometer'
import Difficulty from './components/Difficulty'

let timeout

export default function App() {
    const [win, setWin] = useState(false)
    const [difficulty, setDifficulty] = useState(1)
    const getNumber = (difficulty, min = 2) => {
        const max = difficulty === 1 ? 9 : 99
        return (Math.random() * (max - min) + min).toFixed()
    }

    const [score, setScore] = useState(0)
    const [numbers, setNumbers] = useState([
        getNumber(difficulty),
        getNumber(difficulty),
    ])

    const checkAnswer = (answer) => {
        const correctResult = x * y
        if (answer === correctResult) {
            setWin(true)
            setScore(score + correctResult)
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setNumbers([getNumber(difficulty), getNumber(difficulty)])
                setWin(false)
            }, 500)
        }
    }

    useEffect(() => {
        setNumbers([getNumber(difficulty), getNumber(difficulty)])
    }, [difficulty])

    const [x, y] = numbers
    return (
        <div className="app">
            <Header className="app-header" />
            <section className="app-main">
                <Question x={x} y={y} onSubmit={checkAnswer} />
                <Score score={score} />
                <Chronometer x={x} y={y} show={win} />
                <Difficulty onDifficultyChange={(d) => setDifficulty(d)} />
            </section>
        </div>
    )
}
