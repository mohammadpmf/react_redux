function CourseList() {
    const courses = [
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Next" },
        { id: 4, name: "Node"},
    ];
    return (
        <div>
            <h3>Course List</h3>
            <ul>{courses.map((course) => <li key={course.id}>{course.name}</li>)}</ul>
        </div>
    )
}
export default CourseList