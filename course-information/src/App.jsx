const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>
      {props.parts[0]} {props.exercise[0]}
    </p>
    <p>
      {props.parts[1]} {props.exercise[1]}
    </p>
    <p>
      {props.parts[2]} {props.exercise[2]}
    </p>
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