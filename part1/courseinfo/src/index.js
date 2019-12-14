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
  
  const contentProps = [];
  
    for (const value in props){
      //Array of objects
      contentProps.push(props[value]);
    }

  return (
  <div> 
    
  {contentProps[0].map(element => <p>{element.name} {element.exercises}</p>)}  
    
  </div>)

  }
  

const Total = (props) => {
  
  const contentProps = [];
  const myArr =[];

  for (const value in props){
    //Array of objects
    contentProps.push(props[value]);
  }


  return(
        <div>
        
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