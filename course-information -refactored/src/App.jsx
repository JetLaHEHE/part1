const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part={props.parts[0]} exercise={props.exercise[0]}/>
      <Part part={props.parts[1]} exercise={props.exercise[1]}/>
      <Part part={props.parts[2]} exercise={props.exercise[2]}/>
    </>
  )
}

const Result = (props) => {
  return (
    <>
    <p>Number of exercises {props.exercise[0] + props.exercise[1] + props.exercise[2]}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercise = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercise={exercise} />
      <Result exercise={exercise}/>
    </div>
  )
}

export default App