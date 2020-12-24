import React, { createContext, useState } from 'react'
import axios from 'axios'

export const DogContext = createContext()

const DogContextProvider = props => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const runSearch = query => {
        axios.get(`https://dog.ceo/api/breed/${query}/images/random/9`)
            .then(response => {
                setImages(response.data.message)
                setLoading(false)
                setError(false)
                console.log(response.data.message)
            }, (error) => {
                setError(true)
                setLoading(false)
                console.warn(error)
            })
    }

    return (
        <DogContext.Provider value={{ images, loading, runSearch, error }}>
            {props.children}
        </DogContext.Provider>
    )
}

export default DogContextProvider