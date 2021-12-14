import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Cs = () => {
    return (
        <div>
            <h1>Computer Science</h1>
            <button className='btn'><Link to='/'>Home</Link></button>
        </div>
    )
}

export default Cs
