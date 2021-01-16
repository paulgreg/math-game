import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Score from './components/Score'
import Chronometer from './components/Chronometer'
import Difficulty from './components/Difficulty'
import { getNumber } from './components/MathUtils'
import { checkResult } from './components/MathUtils'
import { useTimeout } from './timeout'

export default function App() {
    const [win, setWin] = useState(false)
    const [difficulty, setDifficulty] = useState('d1')

    const [score, setScore] = useState(0)
    const [numbers, setNumbers] = useState([
        getNumber({ difficulty }),
        getNumber(),
    ])

    const [setWinTimeout] = useTimeout(600)

    const getNewQuestion = () => {
        setNumbers([getNumber({ difficulty }), getNumber()])
        setWin(false)
    }

    const checkAnswer = (answer) => {
        setWin(false)
        if (checkResult(x, y, answer)) {
            setWin(true)
            setScore(score + 1)
            setWinTimeout(getNewQuestion)
        }
    }

    useEffect(getNewQuestion, [difficulty])

    const [x, y] = numbers
    return (
        <div className="app">
            <Header className="app-header" />
            <section className="app-main">
                <Question x={x} y={y} onSubmit={checkAnswer} />
                <Score score={score} />
                <Chronometer x={x} y={y} show={win} />
            </section>
            <section className="app-options">
                <Difficulty onDifficultyChange={(d) => setDifficulty(d)} />
            </section>
        </div>
    )
}
