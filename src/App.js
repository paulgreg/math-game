import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'

export default function App() {
    const [difficulty, setDifficulty] = useState(1)
    const getNumber = (difficulty) =>
        (Math.random() * Math.pow(10, difficulty)).toFixed()

    const [score, setScore] = useState(0)
    const [numbers, setNumbers] = useState([
        getNumber(difficulty),
        getNumber(difficulty),
    ])

    const checkAnswer = (answer) => {
        const correctResult = x * y
        if (answer === correctResult) {
            setNumbers([getNumber(difficulty), getNumber(difficulty)])
            setScore(score + correctResult)
        }
    }

    useEffect(() => {
        setNumbers([getNumber(difficulty), getNumber(difficulty)])
    }, [difficulty])

    const [x, y] = numbers
    return (
        <div className="app">
            <Header score={score} className="app-header" />
            <section className="app-main">
                <Form
                    x={x}
                    y={y}
                    onSubmit={checkAnswer}
                    onDifficultyChange={(d) => setDifficulty(d)}
                />
            </section>
        </div>
    )
}
