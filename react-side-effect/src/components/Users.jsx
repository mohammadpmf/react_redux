import { useEffect, useState } from "react"
import Counter from "./Counter"

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)
  const [id, setId] = useState("")

  // useEffect(() => {p
  //   fetch("http://127.0.0.1:8000/movies/")
  //     .then((res) => res.json())
  //     .then((json) => { setUsers(json.results); setError(false); })
  //     .catch((error) => setError(true))
  // }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/series/")
      .then((res) => res.json())
      .then((json) => { console.log(json.results);})
      .catch((error) => console.log(error))
  }, [])

  // با استفاده از ایسینک و اویت
  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/movies/${id}`,
          { signal: controller.signal }
        );
        const json = await res.json();
        setUsers(json.results)
        setError(false);
      }
      catch (error) {
        setError(true)
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
      console.log('first');
    };
  }, [id]);

  // const searchHandler = async () => {
  //   const res = await fetch(`http://127.0.0.1:8000/movies/${id}`)
  //   const json = await res.json()
  //   console.log(json)
  // }

  return (
    <div>
      {/* {id > 10 && <Counter />} */}
      <input
        type="text"
        placeholder="enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {/* <button onClick={searchHandler}>Search</button> */}
      {/* {!users.length && !error && <h3>Loading ...</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul> */}
      {error && <h3>Something Went Wrong!</h3>}
    </div>
  )
}

export default Users