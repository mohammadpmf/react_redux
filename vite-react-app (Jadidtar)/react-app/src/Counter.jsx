const Counter = () => {
    function increaseHandler(){
        console.log("increase")
    }
    return (
        <div>
            <h1>Counter</h1>
            {/* <button onClick={()=>console.log("increase")}>Increse</button> */}
            <button onClick={increaseHandler}>Increse</button>
        </div>
    )
}

export default Counter