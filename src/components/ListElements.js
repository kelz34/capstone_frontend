import React, { useEffect, useState } from "react";

import EditElements from "./EditElements";

const ListElements = () => {
    const [elements, setElements] = useState([])


    // delete elements function
    const deleteElements = async (id) => {
        try {
            const deleteElements = await fetch(`http://localhost:3000/elements/${id}`, {
                method: "DELETE"
            })

            setElements(elements.filter(elements => elements.elements_id !== id))
            console.log(deleteElements)
        } catch (err) {
            console.error(err.message)
        }
    }

    const getElements = async () => {
        try {
            const response = await fetch ("http://localhost:3000/elements")
            const jsonData = await response.json()

            setElements(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getElements();
    }, [])

    console.log(elements)
    return <>
        <h1>{elements.map(elements => (
            <div>
                <h3 key={elements.elements_id}>{elements.description}</h3>

                <EditElements elements={elements}/>
                <button 
                    class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => deleteElements(elements.elements_id)}><span class="text-1xl font-extrabold dark:text-white">Delete</span></button>
            </div>
        ))}</h1>
    </>
}

export default ListElements;