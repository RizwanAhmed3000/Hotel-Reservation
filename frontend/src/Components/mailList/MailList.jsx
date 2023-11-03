import './mailList.css';

export default function MailList() {
    return (
        <div className='mail'>
            <div className="mailTitles">
                <h1 className='mailTitle'>Save time, save money!</h1>
                <p className='subTitle'>Sign up and we'll send the best deals to you</p>
            </div>
            <div className="mailInputContainer">
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
