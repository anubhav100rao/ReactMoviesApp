import React from 'react'
import './index.css'
import quiz_time from '../../images/quiz_time.png'
import {
    Link
  } from 'react-router-dom';



const Options = () => {
    return (
        <div className="Options">
            <h1> Please select type of quiz here </h1>
            <br/>
            <Link to="/maths"> <button className="btn">Maths</button> </Link> <br/>
            <Link to="/physics"><button className="btn">Physics</button></Link> <br/>
            <Link to="/cs"><button className="btn">Computer Science</button></Link> <br/>
            <img src = {quiz_time} alt="Not found" width="400" />
        </div>
    )
}

export default Options
