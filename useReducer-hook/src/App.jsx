import { useReducer } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 };
    case "IncreaseByAmount":
      return { ...state, count: state.count + action.payload };
    case "Reset":
      return { ...state, count: 0 };
    case "Decrease":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Invalid Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)

  const increaseHandler = () => {
    dispatch({ type: "Increase" })
  }
  const increaseByAmountHandler = () => {
    dispatch({ type: "IncreaseByAmount", payload: 10 })
  }

  const resetHandler = () => {
    dispatch({ type: "Reset" })
  }

  const decreaseHandler = () => {
    dispatch({ type: "Decrease" })
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaseByAmountHandler}>Increase By Amount</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <hr />
      <p>{state2.count}</p>
      <button onClick={() => dispatch2({ type: "Increase" })}>Increase</button>
      <button onClick={() => dispatch2({ type: "IncreaseByAmount", payload: 5 })}>Increase By Amount</button>
      <button onClick={() => dispatch2({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch2({ type: "Decrease" })}>Decrease</button>
    </div>
  )
}

export default App
