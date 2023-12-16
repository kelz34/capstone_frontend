import React, { useState } from "react"

const EditQanda = ({ qanda }) => {
    const [term, setTerm] = useState(qanda)

    // edit term function

    const updateTerm = async (e) => {
        e.preventDefault()
        try {
            const body = {term}
            const response = await fetch(`http://localhost:3000/qanda/${qanda.qanda_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/lessons"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <div>
            <h3 class="">Edit</h3>
            <input 
                type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value={term} 
                onChange={e => setTerm(e.target.value)}
            />
            </div>
            <div>
                <button 
                type="submit" class="text-white bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={e => updateTerm(e)}><span class="text-1xl font-extrabold dark:text-white">Edit</span></button>
            </div>
        </>
)}


export default EditQanda; 