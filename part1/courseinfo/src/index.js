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
  
  const contentNames = [];
  const contentExercises = [];
  const contentProps = [];
  
  for (const value in props){
   
    //Array of objects
    contentProps.push(props[value]);
    
    // for...in Loops to extract data from props

      for (const valueObj in props[value]){
      
        contentNames.push(props[value][valueObj]['name']);
        contentExercises.push(props[value][valueObj]['exercises']);
    
      }
  }



  return (
    <div>
      {contentNames.map(value => value)} 
    
    </div> 
    )

  }
  

const Total = (props) => {
  
  
  


  return(
        <div>
        <p>Number of exercises {props.parts}</p> 
        </div>
        )
}

const App = () => {

        const course = 'Half Stack application development';
        
        const parts = [
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
          
  return (

    
    <div>
        <div>
            <h1>Hola Mundo XX</h1>
            <Header course= {course} />
            <Content part = {parts}/>
            <Total part = {parts}/>
        </div>  
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))