import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    

  return(
        <div>
        <h1>{props.course.name}</h1>
        </div>
        )
}


const Content = (props) => {   
  
  const contentProps = [];
  console.log(props.part.parts);
  
    for (const value in props.part.parts){
      //Array of objects
      contentProps.push(props.part.parts[value]);
    }

  
  
  return (
  <div> 
    
  {contentProps.map(element => <p>{element.name} {element.exercises}</p>)}  
    
  </div>)

  }
  

const Total = (props) => {
  
  const contentProps = [];
  
  for (const value in props.part.parts){
    //Array of objects
    contentProps.push(props.part.parts[value]);
  }
  const myArr =contentProps.map(element => element.exercises);

  return(
        <div>
          <p> The Total amount of exercises is {myArr.reduce((a, b) => a+b)}</p>
        </div>
        )
}

const App = () => {

       const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
          
  return (

    
    <div>
        <div>
            
            <Header course= {course} />
            <Content part = {course}/>
            <Total part = {course}/>
        </div>  
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))