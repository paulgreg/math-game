import './Score.css'

export const getPoints = (difficulty) => {
    return (
        {
            ADD_INT_SIMPLE_NUMBER: 1,
            ADD_INT_1_NUMBER: 2,
            ADD_INT_2_NUMBER: 3,
            ADD_INT_3_NUMBER: 4,
            MULTIPLY_INT_1_NUMBER: 5,
            MULTIPLY_INT_2_NUMBER: 6,
            DIVIDE_INT_2_NUMBER: 5,
            MULTIPLY_SIMPLE_FLOAT_NUMBER: 4,
            DIVIDE_SIMPLE_FLOAT_NUMBER: 4,
        }[difficulty] || 1
    )
}

export default function Score({ score }) {
    return <div className="score">Score : {score}</div>
}
