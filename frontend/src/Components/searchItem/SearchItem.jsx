import { Link } from "react-router-dom"
import "./searchItem.css"

export default function SearchItem({ data }) {
    return (
        <div className="searchItem">
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/362825635.webp?k=9ae7eafc37f930daa5cf8447d9b4a758efdcfe17ceadbe5e42c97942322998e7&o=" className="siImg" alt="" />
            <div className="siDescription">
                <h1 className="siTitle">{data?.name}</h1>
                <span className="siDistance">{data?.distanceFromCityCenter} from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    {data?.description}
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                {data?.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button className="ratingBox">{data?.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">
                        $ {data?.chipestPrice}
                    </span>
                    <span className="siTax">
                        Includes taxes and fees
                    </span>
                    <Link to={`/hotels/${data?._id}`}>
                        <button className="siCheckBtn lsBtn">See Availablity</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
