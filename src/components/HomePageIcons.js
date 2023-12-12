import React from "react"
import { Link } from "react-router-dom"

const HomePageIcons = () => {
    return (
    <nav className="nav">
        <h1 class="text-center text-6xl">Study Tools</h1>
        <ul>
            <div class="flex items-start place-content-around">
                <div class="px-10">
                    <li class="row-span-3 ...">
                        <h3 class="text-center text-3xl">Flash Cards</h3>
                        <Link to="/topics"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuJ-d_F6BNt3LHr0YEGPaYqsJ0DxNAOdpKg&usqp=CAU"/></Link>
                    </li>
                </div>
                <div class="px-10">
                    <li>
                        <h3 class="text-center text-3xl">Lessons</h3>
                        <Link to="/lessons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cZ0Q2rJm4OOcQmPFpkj3JYAh46XiIHjmsQ&usqp=CAU"/></Link>
                    </li>
                </div>
            </div>
        </ul>        
    </nav>
)}

export default HomePageIcons; 


// {/* <div class="flex items-start ...">
//   <div >01</div>
//   <div >02</div>
//   <div >03</div>
// </div> */}