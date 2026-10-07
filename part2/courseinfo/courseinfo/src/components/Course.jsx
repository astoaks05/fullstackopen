const Course = ({ course }) => {
    const parts = course.parts
    const total_exercises = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
    <div>
        <h1>{course.name}</h1>
        {parts.map(part => 
            <p key = {part.id}>
            {part.name}: {part.exercises}
            </p>
        )}
        <strong>
        Total of {total_exercises} exercises.
        </strong>
    </div>
    )
}

export default Course;