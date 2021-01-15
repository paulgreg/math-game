import './Header.css'
export default function Header({ score = 0 }) {
    return (
        <header className="header">
            <span className="header-title">
                <span className="header-logo"> ✖️</span>Multiply Game
            </span>
            <span className="header-score">Score: {score}</span>
        </header>
    )
}
