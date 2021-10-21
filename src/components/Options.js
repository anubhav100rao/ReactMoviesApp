import React from 'react'
import quiz_time from '../images/quiz_time.png'
function sayHello() {
    console.log("Button Clicked")
}
const Options = () => {
    return (
        <div className="Options">
            <h1> Please select type of quiz here </h1>
            <br/>
            <button onClick={sayHello} > Maths </button> <br/>
            <button onClick={sayHello} > Physics </button> <br/>
            <button onClick={sayHello} > Computer Science </button> <br/>
            <img src = {quiz_time} alt="Not found" width="400" />
        </div>
    )
}

export default Options
