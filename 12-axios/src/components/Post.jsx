import axios from "axios"
import { useState } from "react"

function Post() {
    const [username, setUsername] = useState("alak")
    const [email, setEmail] = useState("abcdefg@gmail.com")
    const [musicId, setMusicId] = useState(10)
    const [userId, setUserId] = useState(10)

    const postHandler = () => {
        // این ورا رو دیگه تغییر ندادم. میشد اینا رو هم با همون اِی پی آی که خودم تعریف کردم نوشت.
        axios.post("http://127.0.0.1:8000/auth/users/", {
            username: username,
            password: "mypassis123",
            email: email,
            first_name: "alaki",
        })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }
    const deleteHandler = () => {
        axios.delete(`http://127.0.0.1:8000/music/${musicId}/`, {
            auth: {
                username: "z",
                password: "mypassis123"
            }
        })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }
    const updateHandler = () => {
        // axios.patch(
        axios.put(
            `http://127.0.0.1:8000/auth/users/${userId}/`,
            { email: email },
            {
                auth: {
                    username: "z",
                    password: "mypassis123"
                }
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <h1>Post Part</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={postHandler}>Create User</button>
            <hr />
            <h1>Put and Patch Part</h1>
            <input
                type="number"
                min={1}
                max={10}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={updateHandler}>Update User</button>
            <hr />
            <h1>Delete Part (Music)</h1>
            <input
                type="number"
                min={1}
                max={21}
                value={musicId}
                onChange={(e) => setMusicId(e.target.value)}
            />
            <button onClick={deleteHandler}>Delete Music</button>
        </div>
    )
}

export default Post