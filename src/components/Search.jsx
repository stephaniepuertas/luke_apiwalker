import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search=()=> {
    // define state
    // must have a state for each input 
    const [id, setId]= useState(null)
    const [category, setCategory]= useState("")

    //useNavigate
    const navigate= useNavigate()

    //submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <fieldset> 
            <legend>Search.jsx</legend>
            <form onSubmit= {submitHandler} >
                <p> 
                    {/* one input */}
                    <select onChange={(e)=> setCategory(e.target.value) }>
                        <option value=""> choose value</option>
                        <option value="people"> People</option>
                        <option value="planets"> Planet</option>
                    </select>
                    {/* another input */}
                    <input type="number" onChange={(e)=> setId(e.target.value)} />
                    <button>Search</button>
                </p>  
            </form>
        </fieldset>
    )
}

export default Search