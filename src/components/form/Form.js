import React from 'react'
import { useState, useReducer } from 'react'
import './index.css'

var check = false
const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value
    }
}

const Form = (props) => {
    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 3000)
        check = true
    }
    return (
    <div className="wrapper">
      <h1>{props.name} quiz</h1>
      <form onSubmit={ handleSubmit }>
          {submitting && <div>
            <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
         this is data that you are submitting...
            </div>}
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" onChange={setFormData} />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default Form
