import React, { useContext, useEffect } from 'react'
import { DogContext } from '../context/DogContext'
import Loader from './Loader'
import Gallery from './Gallery'

 
const Container = ({searchTerm}) => {
    const { images, loading, runSearch, error } = useContext(DogContext)
    useEffect(() => {
        runSearch(searchTerm)
    }, [searchTerm])
    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} error={error}/>}
        </div>
    )
}

export default Container