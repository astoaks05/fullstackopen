const Header = ({ course }) => {
    return (
        <h1>
            {course.name}
        </h1>
    )
}

const Total = ({ parts }) => {
    const total_exercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <strong>Total of {total_exercises} exercises.</strong>
    )
}

const Parts = ({ parts }) => {
    return (
        parts.map(part => 
            <p key = {part.id} >{part.name}: {part.exercises}</p>
        )
    )
}

const Course = ({ course }) => {
    const parts = course.parts
    const total_exercises = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
    <div>
        <Header course = {course} />
        <Parts parts = {parts} />
        <Total parts = {parts} />
    </div>
    )
}

export default Course;