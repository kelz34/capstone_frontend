import React, { useState }  from "react";

const InputElements = () => {
    const [description, setDescription] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:3000/elements", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }) 
 

            window.location = "/tips";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h1 class="text-center">Input Elements</h1>
            <form class="flex m-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    class="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                />
                <button type="submit" class="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span class="text-1xl font-extrabold dark:text-white">Add</span></button>
            </form>
        </>
    );
};


{/* <div class="flex items-stretch ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div> */}

export default InputElements;