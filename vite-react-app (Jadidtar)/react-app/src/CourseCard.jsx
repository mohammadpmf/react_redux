import { useState } from "react"
import "./CourseCard.css"

function CourseCard({ course: { name, description } }) {
    const [selected, setSelected] = useState(false)
    return (
        // <li className={`container margin ${selected && "selected"}`}>
        // <li style={{color: selected?"red":"green"}}>
        <li className="container">
            <h4>{name}</h4>
            <p>{description}</p>
            <button onClick={() => (setSelected((s) => !s))}>Change</button>
        </li>
    )
}

export default CourseCard