import './Score.css'

export const getPoints = (difficulty) => {
    return (
        {
            ADD_INT_1_NUMBER: 1,
            MULTIPLY_INT_TENS_NUMBER: 2,
            SUBSTRACT_INT_1_NUMBER: 2,
            ADD_INT_10_NUMBER: 2,
            DIVIDE_INT_TENS_NUMBER: 3,
            ADD_INT_2_NUMBER: 3,
            SUBSTRACT_NEGATIVE_INT_1_NUMBER: 3,
            ADD_INT_20_NUMBER: 3,
            ADD_INT_3_NUMBER: 4,
            SUBSTRACT_INT_2_NUMBER: 4,
            MULTIPLY_SIMPLE_FLOAT_NUMBER: 4,
            DIVIDE_SIMPLE_FLOAT_NUMBER: 4,
            MULTIPLY_INT_1_NUMBER: 5,
            SUBSTRACT_NEGATIVE_INT_2_NUMBER: 5,
            SUBSTRACT_INT_3_NUMBER: 5,
            DIVIDE_INT_2_NUMBER: 5,
            MULTIPLY_INT_2_NUMBER: 6,
        }[difficulty] || 1
    )
}

export default function Score({ score }) {
    return <div className="score">Score : {score}</div>
}
