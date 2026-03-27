import { useEffect, useReducer } from "react"

const initialState = {
    isLoading: true,
    data: [],
    error: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { isLoading: false, data: action.payload.results, error: "" };
        case "FAILED":
            return { isLoading: false, data: [], error: action.payload };
        default:
            throw new Error("Invalid Action");
    }
}

function HttpReq() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        fetch("http://127.0.0.1:8000/movies")
            .then((res) => res.json())
            .then((json) => dispatch({ type: "SUCCESS", payload: json }))
            .catch((error) => dispatch({ type: "FAILED", payload: error.message }))
    }, []);

    return (
        <div>
            {state.isLoading && <p>Loading ...</p>}
            <div>
                {state.data.map(movie => <p key={movie.id}>{movie.title}</p>)}
            </div>
            {!!state.error && <p>{state.error}</p>}
            <hr />
            <hr />
        </div>
    )
}

export default HttpReq