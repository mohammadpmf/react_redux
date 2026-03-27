import { useContext } from "react"
import { UserContext } from "../context/UserProvider";

function UsersList() {
    const { users } = useContext(UserContext);
    console.log(users);
    return (
        <div>
            <p>UsersList:</p>
            {users.map((user)=><p key={user.id}>User #{user.id} {user.name}</p>)}
        </div>
    )
}

export default UsersList