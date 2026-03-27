import { createContext, useState } from "react"

// export const UserContext = createContext()
const UserContext = createContext()

function UserProvider({ children }) {
    const [users, setUsers] = useState([
        { id: 1, name: "Mohammad" },
        { id: 2, name: "Fatemeh" },
        { id: 3, name: "Milad" },
    ])
    return (
        <UserContext.Provider value={{ users: users, setUsers: setUsers }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext }
export default UserProvider