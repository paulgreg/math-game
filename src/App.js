import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import Score from './components/Score'
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

    const getNewQuestion = useCallback(() => {
        setDifficulty(pickRandomDifficulty(difficulties))
        setNumbers(generateNumbers(difficulty))
        setWin(false)
    }, [difficulty, difficulties])

    const checkAnswer = (result) => {
        setWin(false)
        if (checkResult({ difficulty, x, y, result })) {
            setWin(true)
            setScore(score + 1)
            setWinTimeout(getNewQuestion)
        }
    }

    useEffect(getNewQuestion, [getNewQuestion, difficulty, difficulties])

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
                <Difficulty
                    difficulties={difficulties}
                    onDifficultiesChange={(d) => setDifficulties(d)}
                />
                <Confetti win={win} />
            </section>
        </div>
    )
}
