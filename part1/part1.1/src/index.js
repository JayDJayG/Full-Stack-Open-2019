import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
return(
    <div>
        <h1>{props.course}</h1>
        
    </div>
)
}
const Content = (props) => {
    return(
        <div>
        {props.part} {props.exercise}
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
        <Content part={'part 1'} exercise={12}/>
        <Total total= {exercise1 + exercise2 + exercise3}/>
      </div>
    )
  }
  ReactDOM.render(<App />, document.getElementById('root'))
