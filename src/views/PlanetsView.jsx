import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const PlanetsView=()=> {
    // state
    const [planet, setPlanet]= useState(null)


    // grab path variable
    const {planet_id} = useParams()

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/planets/${planet_id}`)
            .then(res=>setPlanet(res.data))
            .catch(error => console.log(error))
    },[planet_id])
    
    useEffect(()=>{

    },[])

    return (
        <fieldset>
            <legend>PlanetsView.jsx</legend>
            {
                //turnery
            (planet)?<>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
            </>
            :<h1>Loading...planet</h1>
            }
        </fieldset>
    )
}

export default PlanetsView