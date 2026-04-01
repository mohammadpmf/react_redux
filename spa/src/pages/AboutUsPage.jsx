import { Link, Outlet } from "react-router-dom"
import NavBar from "./components/Navbar"

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <h1>
        AboutUsPage
      </h1>
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="users" >Users</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AboutUsPage