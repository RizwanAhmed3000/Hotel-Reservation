import './topRatedCard.css'

export default function TopRatedCard() {
    return (
        <div className='topCard'>
            <div className="topCardImg">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" />
            </div>
            <div className="cardBottom">
                <div className="topCardTitles">
                    <h3>Hotel name</h3>
                    <p>Old Town, Poland</p>
                </div>
                <div className="topCardRatings">
                    <div className="ratingBox">
                        8.7
                    </div>
                    <p>Excellent</p>
                    <p>1234 Reviews</p>
                </div>
                <Pricing />
            </div>
        </div>
    )
}

function Pricing() {
    return (
        <div className="pricing">
            <p>starting from <span className='amount'>PKR 44,000</span></p>
        </div>
    )
}
