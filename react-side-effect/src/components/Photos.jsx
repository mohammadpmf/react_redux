import { useEffect, useState } from "react"

function Photos() {
    const [isShow, setIsShow] = useState(false)
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setIsShow(isShow => !isShow)
        setIsShow(isShow => !isShow)
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setText("aa");
    }

    return (
        <div>
            <h1>Drdjango</h1>
            {isShow && <h3>React course</h3>}
            <button onClick={clickHandler}>toggle</button>
            <p>{count}</p>
            <p>{text}</p>
        </div>
    )
}

export default Photos