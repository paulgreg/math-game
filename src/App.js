import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Score, { getPoints } from './components/Score'
import Chronometer from './components/Chronometer'
import Difficulty, {
    getDefaultDifficulties,
    pickRandomDifficulty,
} from './components/Difficulty'
import { generateNumbers } from './components/MathUtils'
import { checkResult } from './components/MathUtils'
import { useTimeout } from './timeout'
import Confetti from './components/Confetti'

export default function App() {
    const [win, setWin] = useState(false)
    const [difficulties, setDifficulties] = useState(getDefaultDifficulties())
    const [difficulty, setDifficulty] = useState(
        pickRandomDifficulty(difficulties)
    )

    const [score, setScore] = useState(0)
    const [numbers, setNumbers] = useState(generateNumbers(difficulty))

    const [setWinTimeout] = useTimeout(300)

    const getNewQuestion = () => {
        const newDifficulty = pickRandomDifficulty(difficulties)
        setDifficulty(newDifficulty)
        let a, b
        do {
            ;[a, b] = generateNumbers(newDifficulty)
        } while (a === numbers[0] && b === numbers[1])
        setNumbers([a, b])
        setWin(false)
    }

    const checkAnswer = (result) => {
        setWin(false)
        if (checkResult({ difficulty, x, y, result })) {
            setWin(true)
            setScore(score + getPoints(difficulty))
            setWinTimeout(getNewQuestion)
        }
    }

    useEffect(getNewQuestion, [difficulties])

    const [x, y] = numbers
    return (
        <div className="app">
            <Header className="app-header" />
            <section className="app-main">
                <Question
                    x={x}
                    y={y}
                    difficulty={difficulty}
                    disabled={win}
                    onSubmit={checkAnswer}
                />
                <Score score={score} />
                <Chronometer x={x} y={y} show={win} />
            </section>
            <section className="app-options">
                <details className="app-details">
                    <summary className="app-summary">Options</summary>
                    <Difficulty
                        difficulties={difficulties}
                        onDifficultiesChange={(d) => setDifficulties(d)}
                    />
                    <Confetti win={win} />
                    <p>
                        That web application is free software -{' '}
                        <a href="https://github.com/paulgreg/math-game/blob/main/LICENSE.md">
                            MIT License
                        </a>{' '}
                        - Source code on{' '}
                        <a href="https://github.com/paulgreg/math-game">
                            github
                        </a>
                    </p>
                </details>
            </section>
        </div>
    )
}
