import { Link } from "react-router-dom"
import React from "react"

const HomePageIcons = () => {
    return <nav className="nav">
        <Link to="/" className="site-title">Chem Cheats</Link>
        <ul>
            <li>
                <img src=""/>
                <Link to="/cards">Index Cards</Link>
            </li>
            <li>
                <img src=""/>
                <Link to="/lessons">Lessons</Link>
            </li>
        </ul>
    </nav>
}

export default HomePageIcons; 