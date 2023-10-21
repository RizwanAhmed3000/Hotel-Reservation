import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Booking</span>
                <div className="navItems">
                    <button className='navBtn'>Register</button>
                    <button className='navBtn'>Login</button>
                </div>
            </div>
        </div>
    )
}


