import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={LinkStyle} to='/'>Home</Link> | <Link style={LinkStyle} to='/about'>About</Link>
        </header>
    )
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}