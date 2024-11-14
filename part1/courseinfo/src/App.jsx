const Header = (props) => {
  return(
 <header><b>{props.course}</b></header>
  )
}

const Content = (props) => {
  console.log (props)
  console.log(props)
  return(
    <div>
      <p>Part 1 {props.parts[0].name} and it has {props.parts[0].exercises} exercises</p>      
      <p>Part 2 {props.parts[1].name} and it has {props.parts[1].exercises} exercises</p>      
      <p>Part 3 {props.parts[2].name} and it has {props.parts[2].exercises} exercises</p>      

    </div>
  ) 
}

const Total = (props) => {
  console.log (props)
  let total= props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return(
 <div>
  <p>
  Number total of exercises is {total}
  </p>
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
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

export default App