import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './navbar.css';

export default function Navbar() {
    const { user, dispatch } = useContext(AuthContext)
    // console.log(user)
    const logoutHandler = () => {
        dispatch({ type: 'LOGIN_OUT' })
    }

    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="logo" >Booking</span>
                </Link>
                {
                    user ? (
                        <div className="navItems">
                            <button className='navBtn'>{user?.username}</button>
                            <button className='navBtn' onClick={logoutHandler}>Logout</button>
                        </div>
                    ) : (
                        <div className="navItems">
                            <button className='navBtn'>Register</button>
                            <Link to='/login' >
                                <button className='navBtn'>Login</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


