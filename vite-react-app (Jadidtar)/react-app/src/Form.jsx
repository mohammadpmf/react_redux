import { useState } from "react"

function Form() {
    // const [email, setEmail] = useState("Mohammad")
    // const [password, setPassword] = useState("")
    // const [role, setRole] = useState("user")
    // const [gender, setGender] = useState("male")
    // const [rules, setRules] = useState(false)
    const [form, setForm] = useState({
        email: "Mohammad",
        password: "",
        role: "user",
        gender: "male",
        rules: false,
    })
    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        if (name === "rules") {
            setForm((form) => ({ ...form, rules: !form.rules }))
        }
        else {
            setForm((form) => ({ ...form, [name]: value }))
        }
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form)
    }
    // const emailHandler = (event) => {
    //     setEmail(event.target.value)
    // }
    // const passwordHandler = (event) => {
    //     setPassword(event.target.value)
    // }
    // const selectHandler = (event) => {
    //     setRole(event.target.value)
    // }
    // const genderHandler = (event) => {
    //     setGender(event.target.value)
    // }
    // const rulesHandler = () => {
    //     setRules((rules) => !rules)
    // }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Email" name="email" value={form.email} onChange={changeHandler} />
                <input type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler} />
                <select onChange={changeHandler} name="role" value={form.role}>
                    <option value="user">User</option>
                    <option value="writer">Writer</option>
                    <option value="admin">Admin</option>
                </select>
                <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="male" value="male" onChange={changeHandler} checked={form.gender === "male"} />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={changeHandler} checked={form.gender === "female"} />
                    <label htmlFor="other">Other</label>
                    <input type="radio" name="gender" id="other" value="other" onChange={changeHandler} checked={form.gender === "other"} />
                </div>
                <label htmlFor=""></label>
                <input type="checkbox" checked={form.rules === true} name="rules" onChange={changeHandler} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form