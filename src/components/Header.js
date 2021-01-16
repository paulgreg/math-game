import './Header.css'
import logo from './logo-multiply.svg'

export default function Header() {
    return (
        <header className="header">
            <img
                src={logo}
                width={32}
                height={32}
                className="header-logo"
                alt=""
            />
            ️ Math Game
        </header>
    )
}
