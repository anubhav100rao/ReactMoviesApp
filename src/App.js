import React from 'react';
import './App.css';
import { useState, useReducer, useEffect } from 'react'
import axios from 'axios';

function ShowInput() {
  const [inputState, setInputState] = useState("Hi!")
  const changeInputState = (event) => {
    setInputState(event.target.value)
  }
  return <div>
    <input placeholder='enter something...' onChange={changeInputState}/>
    {inputState}
  </div>
}


function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1)
  }
  return <div>
    <h1>Hello React</h1>
      {counter} <button onClick={ increment } >increment</button>
      <br/>
  </div>
}

function ReducerExample() {
  function reducer(state, action) {
    switch(action.type) {
      case 'increment':
        return {count: state.count+1, isVisible: state.isVisible}
      case 'toggleVisibility':
        return {count: state.count, isVisible: !state.isVisible}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, {count: 0, isVisible: true})
  return <div>
    {state.count}
    <button
      onClick={() => {
          dispatch({type: 'increment'})
          dispatch({type: 'toggleVisibility'})
        }
      }
    >
      Increment and toggle
    </button>
    {state.isVisible && <p>Show text current state's square value is {state.count * state.count}</p>}
  </div>
}

function EffectExample() {
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("useEffect callBack called")
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data)
      })
  }, [])
  return <div>
    <h3>useEffect hook</h3>
    <ul>
      {
        data.map(item => <div>{item.email} ******** {item.name}<br/><br/></div>)
      }
    </ul>
  </div>
}


function App() {
  
  return (
    <div className='App'>
      <Counter/>
      <ShowInput/>
      <br/>
      <ReducerExample/>
      <EffectExample/>
    </div>
  );
}

export default App;