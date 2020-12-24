import React from 'react'
import Form from './Form'
import Navigation from './Navigation'


const Header = ({ history, handleSubmit }) => (
    <header>
        <h1>DOG API <i className="fas fa-dog"></i></h1>
        <Form history={history} handleSubmit={handleSubmit} />
        <Navigation />
    </header>
)

export default Header