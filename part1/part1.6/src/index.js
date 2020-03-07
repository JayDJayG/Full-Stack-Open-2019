import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Greeting = (props) => <div><h1>{props.greetings}</h1></div>
const Message = (props) => <div><h1>{props.message}</h1></div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Count = ({text, count}) => (<div><p>{text} {count}</p></div>) 

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  return (
    <div>
      <Greeting greetings={"give feedback"}/>
      <Button onClick={() => setGood(good + 1)} text= {"good"}/>
      <Button onClick={() => setNeutral(neutral + 1)} text= {"neutral"}/>
      <Button onClick={() => setBad(bad + 1)} text= {"bad"}/>
      <Message message= {"statistics"}/>
      <Count text={"good"} count= { good}/>
      <Count text={"neutral"} count= { neutral}/> 
      <Count text={"bad"} count= { bad}/>  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)