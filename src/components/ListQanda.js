import React, { useEffect, useState } from "react";
import EditQanda from "./EditQanda";

const ListQanda = () => {
    const [qanda, setQanda] = useState([])


    // delete qanda function
    const deleteQanda = async (id) => {
        try {
            const deleteQanda = await fetch(`http://localhost:3000/qanda/${id}`, {
                method: "DELETE"
            })

            setQanda(qanda.filter(qanda => qanda.qanda_id !== id))
            // console.log(deleteQanda)
        } catch (err) {
            console.error(err.message)
        }
    }

    const getQanda = async () => {
        try {
            const response = await fetch ("http://localhost:3000/qanda")
            const jsonData = await response.json()

            setQanda(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getQanda();
    }, [])

    // console.log(qanda)
    return <>
        <h1>{qanda.map(qanda => (
            <div>
                <h3 key={qanda.qanda_id}>{qanda.term}</h3>

                <EditQanda qanda={qanda}/>
                <button 
                    class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => deleteQanda(qanda.qanda_id)}><span class="text-1xl font-extrabold dark:text-white">Delete</span></button>
            </div>
        ))}</h1>
    </>
}

export default ListQanda;