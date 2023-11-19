import useFetch from '../../hooks/useFetch'
import Skeleton from '../Skeleton/Skeleton'
import './topRatedCard.css'

export default function TopRatedCard() {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")
    // console.log(data)

    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
        'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=',
        'https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=',
        'https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o='
    ]
    return (
        <>
            {
                loading ? (<Skeleton type="feed" />) :
                    (<>
                        {images && data.map((item, i) => (
                            < div className='topCard' key={item?._id}>
                                <div className="topCardImg">
                                    <img src={item?.photos[0] || images[i]} alt="" />
                                </div>
                                <div className="cardBottom">
                                    <div className="topCardTitles">
                                        <h3>{item?.name}</h3>
                                        <p>{item?.address}</p>
                                    </div>
                                    {item?.rating && <div className="topCardRatings">
                                        <div className="ratingBox">
                                            {item?.rating}
                                        </div>
                                        <p>Excellent</p>
                                        <p>{item?.reviews} Reviews</p>
                                    </div>}
                                    <Pricing price={item?.chipestPrice} />
                                </div>
                            </ div>
                        ))}
                    </>)
            }
        </>
    )
}

function Pricing({ price }) {
    return (
        <div className="pricing">
            <p>starting from <span className='amount'>$ {price}</span></p>
        </div>
    )
}
