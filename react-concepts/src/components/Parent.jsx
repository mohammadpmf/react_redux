import { useState } from "react"
import ChildA from "./ChildA"
import ChildB from "./ChildB"
import Button from "./Button"
import StyledDiv from "./StyledDiv"


function Parent() {
    const [number, setNumber] = useState(0)
    const clickHandler = () => {
        setNumber((number) => number + 1)
    }
    return (
        <StyledDiv title="Parent">
            <button onClick={() => setNumber((number) => number + 1)}>+</button>
            <ChildA number={number} setNumber={setNumber} />
            <ChildB number={number} button={<Button clickHandler={clickHandler} />} />
        </StyledDiv>
    )
}

export default Parent

