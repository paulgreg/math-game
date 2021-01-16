import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Score from './components/Score'
import Chronometer from './components/Chronometer'
import Difficulty from './components/Difficulty'
import { getNumber, MULTIPLY_INT_1_NUMBER } from './components/MathUtils'
import { checkResult } from './components/MathUtils'
import { useTimeout } from './timeout'
import Confetti from './components/Confetti'

export default function App() {
    const [win, setWin] = useState(false)
    const [difficulty, setDifficulty] = useState(MULTIPLY_INT_1_NUMBER)

    const [score, setScore] = useState(0)
    const [numbers, setNumbers] = useState([
        getNumber({ difficulty }),
        getNumber(),
    ])

    const [setWinTimeout] = useTimeout(300)

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
                <Question x={x} y={y} disabled={win} onSubmit={checkAnswer} />
                <Score score={score} />
                <Chronometer x={x} y={y} show={win} />
            </section>
            <section className="app-options">
                <Difficulty
                    difficulty={difficulty}
                    onDifficultyChange={(d) => setDifficulty(d)}
                />
                <Confetti win={win} />
            </section>
        </div>
    )
}
