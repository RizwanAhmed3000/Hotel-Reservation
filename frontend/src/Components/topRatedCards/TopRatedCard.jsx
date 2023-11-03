import './topRatedCard.css'

export default function TopRatedCard({ data }) {
    return (
        <div className='topCard'>
            <div className="topCardImg">
                <img src={data?.img} alt="" />
            </div>
            <div className="cardBottom">
                <div className="topCardTitles">
                    <h3>{data?.name}</h3>
                    <p>Old Town, Poland</p>
                </div>
                <div className="topCardRatings">
                    <div className="ratingBox">
                        {data?.rating}
                    </div>
                    <p>Excellent</p>
                    <p>{data?.reviews} Reviews</p>
                </div>
                <Pricing price={data?.price} />
            </div>
        </div>
    )
}

function Pricing({ price }) {
    return (
        <div className="pricing">
            <p>starting from <span className='amount'>PKR {price}</span></p>
        </div>
    )
}
