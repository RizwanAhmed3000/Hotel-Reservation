import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to='/' style={{  textDecoration: "none", color: "inherit" }}>
                    <span className="logo" >Booking</span>
                </Link>
                <div className="navItems">
                    <button className='navBtn'>Register</button>
                    <button className='navBtn'>Login</button>
                </div>
            </div>
        </div>
    )
}


