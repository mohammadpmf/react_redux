import CourseCard from "./CourseCard.jsx";
import styles from "./CourseList.module.css"
// import "./CourseList.css"

function CourseList() {

    const courses = [
        { id: 1, name: "React", description: "This is React course" },
        { id: 2, name: "JavaScript", description: "This is JavaScript course" },
        { id: 3, name: "Next", description: "This is Next course" },
        { id: 4, name: "Node", description: "This is Node course" },
    ];
    return (
        <div className={styles.container}>
            <h3>Course List</h3>
            <p>test</p>
            <ul>{courses.map((course) => <CourseCard key={course.id} course={course} />)}</ul>
        </div>
    )
}
export default CourseList