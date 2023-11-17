import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import "./login.css"

export default function Login() {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { user, isLoading, isError, dispatch } = useContext(AuthContext);

    const changeHandler = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('/auth/login', credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data })
        } catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error.response.data })
        }
    }

    console.log(user)

    return (
        <>
            <div className="login">
                <div className="lContainer">
                    <div className="l-input-group">
                        <input type="text" required name="username" className="l-input" id="username" onChange={changeHandler} />
                        <label className="l-user-label">Username</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="password" className="l-input" id="password" onChange={changeHandler} />
                        <label className="l-user-label">Password</label>
                    </div>
                    <button className="l-button searchBtn" onClick={loginHandler}>Login</button>
                    {isError && <span className="err">{isError}</span>}
                </div>
            </div>
        </>
    )
}
