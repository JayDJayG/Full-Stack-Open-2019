import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
return(
    <div>
        <h1>{props.course}</h1>
        
    </div>
)
}

const Part = (props) =>
{
    return(
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>    
    )
    
}
const Content = (props) => {
    return(
        <div>

            <Part part = {props.part1} exercise = {props.exercise1}/> 
            <Part part = {props.part2} exercise = {props.exercise2}/> 
            <Part part = {props.part3} exercise = {props.exercise3}/> 

        </div>   
    )
}
/*
<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
*/

const Total = (props) => {
    return(
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}

const App = () => {
    // const-definitions
  
    const exercise1 = 12;
    const exercise2 = 24;
    const exercise3 = 36;
    
    return (
      <div>
        <Header course={'course'} />
        <Content part1={'part 1'} exercise1={exercise1}
                part2={'part 2'} exercise2={exercise2}
                part3={'part 3'} exercise3={exercise3}
        />
        <Total total= {exercise1 + exercise2 + exercise3}/>
      </div>
    )
  }
  ReactDOM.render(<App />, document.getElementById('root'))
