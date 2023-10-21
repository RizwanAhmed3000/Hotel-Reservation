import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Booking</span>
                <div className="navBtns">
                    <button className='navBtn'>Register</button>
                    <button className='navBtn aaa'>Login</button>
                </div>
            </div>
        </div>
    )
}


