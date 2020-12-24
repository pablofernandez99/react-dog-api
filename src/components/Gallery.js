import React from 'react'
import NoImages from './NoImages'
import Image from './Image'


const Gallery = props => {
    const result = props.data
    const error = props.error

    let images


    if (error) {
        images = <NoImages />
    } else {
        images = result.map(image => (
            <Image url={image} key={image.toString()} />
        ))
    }


    return (
        <div>
            <ul>
                {images}
            </ul>
        </div>
    )
}


export default Gallery