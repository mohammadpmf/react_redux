function Banner({ title, description, numOfStudents }) {
    return (
        <div>
            <hr />
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Number of Students: {numOfStudents}</span>
            <hr />
        </div>
    )
}

export default Banner