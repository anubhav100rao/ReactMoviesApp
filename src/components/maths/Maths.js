import React from 'react'
import {Link} from 'react-router-dom' 
import './index.css'
import Form from '../form/Form'
const Maths = () => {
    return (
        <div>
          <h1>Maths</h1>
          <button className='btn'><Link to='/'>Home</Link></button>
          <Form name="Maths" />
        </div>
    )
}

export default Maths
