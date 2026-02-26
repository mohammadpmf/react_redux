import { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
    color: ${props => props.selected ? "blue" : "red"};
    background-color: silver;
    /* &:hover{
        color: red;
    } */
    @media(max-width: 1200px) { 
        background-color: aqua;
    }
`

function Banner({ title, description, numOfStudents }) {
    const [selected, setSelected] = useState(true)
    return (
        <Div selected={selected}>
            <button onClick={() => (setSelected(s => !s))}>Change</button>
            <hr />
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Number of Students: {numOfStudents}</span>
            <hr />
        </Div>
    )
}

export default Banner