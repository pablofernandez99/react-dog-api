import React from 'react'

const Image = ({ url }) => {
    return (
        <li>
            <img src={url} alt="Dog"  width="100%"/>
        </li>
    )
}

export default Image