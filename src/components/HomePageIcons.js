import React from "react"
import { Link } from "react-router-dom"

const HomePageIcons = () => {
    return <nav className="nav">
        <Link to="/" className="site-title">Chem Cheats</Link>
        <ul>
            <li>
                <h3>Flash Cards</h3>
                <Link to="/topics"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuJ-d_F6BNt3LHr0YEGPaYqsJ0DxNAOdpKg&usqp=CAU"/></Link>
            </li>
            <li>
                <h3>Lessons</h3>
                <Link to="/lessons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cZ0Q2rJm4OOcQmPFpkj3JYAh46XiIHjmsQ&usqp=CAU"/></Link>
            </li>
        </ul>
    </nav>
}

export default HomePageIcons; 