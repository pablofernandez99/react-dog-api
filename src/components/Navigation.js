import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/akita">Akita</NavLink>
            </li>
            <li>
                <NavLink to="/beagle">Beagle</NavLink>
            </li>
            <li>
                <NavLink to="/dalmatian">Dalmatian</NavLink>
            </li>
            <li>
                <NavLink to="/pug">Pug</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navigation