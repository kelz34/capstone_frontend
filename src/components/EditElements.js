import React, { Fragment, useState } from "react"

const EditElements = ({ elements }) => {
    const [description, setDescription] = useState(elements.description)

    // edit description function

    const updateDescrition = async (e) => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch(`http://localhost:3000/elements/${elements.elements_id}`, {
                method: "PUT",
                 headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <div>
            <h3>Edit</h3>
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <button 
                type="button"
                onClick={e => updateDescrition(e)}>Edit</button>
            </div>
            
        </Fragment>
)}

export default EditElements; 