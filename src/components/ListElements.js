import React, { Fragment, useEffect, useState } from "react";

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
    return <Fragment>
        <h1>{elements.map(elements => (
            <div>
                <h3 key={elements.elements_id}>{elements.description}</h3>

                <EditElements elements={elements}/>
                <button 
                    onClick={() => deleteElements(elements.elements_id)}>Delete</button>
            </div>
        ))}</h1>
    </Fragment>
}

export default ListElements;