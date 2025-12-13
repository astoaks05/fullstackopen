const Header = () => <h1>Web development curriculum</h1>

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

export default Courses;