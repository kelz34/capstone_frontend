import React from "react"
import { Link } from "react-router-dom"

const HomePageIcons = () => {
    return (
    <nav>
        <h1 class="text-center text-6xl mb-5 mt-5">Study Tools</h1>
        <ul >
            <div class="grid grid-cols-2 gap-15 justify-center content-around">
                <div class="flex justify-center">
                    <li class="">
                        <h3 class="text-center text-3xl mb-3">Flash Cards</h3>
                        <Link to="/cards"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuJ-d_F6BNt3LHr0YEGPaYqsJ0DxNAOdpKg&usqp=CAU"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <h3 class="text-center text-3xl mb-3">Lessons</h3>
                        <Link to="/lessons"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cZ0Q2rJm4OOcQmPFpkj3JYAh46XiIHjmsQ&usqp=CAU"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <h3 class="text-center text-3xl mt-10 mb-10">Practice Problems</h3>
                        <Link to="#"><img class="mb-3" src="https://static.vecteezy.com/system/resources/thumbnails/002/165/691/small/line-icon-for-copy-vector.jpg"/></Link>
                    </li>
                </div>
                <div class="flex justify-center">
                    <li>
                        <h3 class="text-center text-3xl mt-10 mb-10">Create a Quiz</h3>
                        <Link to="#" ><img class="mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRp9ysrLegMwtE5T98QCuxDi6etPD52D8jA&usqp=CAU"/></Link>
                    </li>
                </div>
            </div>
        </ul>        
    </nav>


)}

export default HomePageIcons; 