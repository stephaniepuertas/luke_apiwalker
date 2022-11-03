import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const PeopleView= ()=> {
    //state
    const [person, setPerson] = useState(null)

    //grabbing path variable
    const {people_id} =useParams()

    // console.log("PeopleView > people_id: ", people_id)

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/people/${people_id}`)
            .then(res =>setPerson(res.data) )
            .catch(error => console.log(error))
    },[people_id] )

    useEffect(()=> {

    },[])


    return (
        <fieldset>
            <legend>PeopleView.jsx</legend>
            {
                // tunery operator
                (person)?<>
                    <h1>{person.name} </h1>
                    <p>Height: {person.height}</p>
                    <p>Mass:{person.mass} </p>
                    <p>Hair Color:{person.hair_color}</p>
                    <p>Skin Color:{person.skin_color}</p>
                </>
                :<h1>Loading...</h1>
            }

        </fieldset>
    )
}

export default PeopleView