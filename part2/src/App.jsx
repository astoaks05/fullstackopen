const Header = ({ courses }) => <h1>Web development curriculum</h1>

const Content = ({ courses }) => {
  const displayExercises = (part) => {
    return (
      <p key={part.id}>
        {part.name}: {part.exercises}
      </p>
    )
  }
  const getTotal = (sum, part) => {
    return sum += part.exercises
  }
  const displayContents = (course) => {
    return (
      <div key={course.id}>
        <h2>
        {course.name}
        </h2>
        {course.parts.map(displayExercises)}
        <b>
          Total of {course.parts.reduce(getTotal, 0)} exercises
        </b>
      </div>
    )
  }
  return (
    <>
      {courses.map(displayContents)}
    </>
  )
}


const Courses = ({ courses }) => {
  return(
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
    </div>
  )
}
  

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App