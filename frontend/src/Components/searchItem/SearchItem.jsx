import "./searchItem.css"

export default function SearchItem() {
    return (
        <div className="searchItem">
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/362825635.webp?k=9ae7eafc37f930daa5cf8447d9b4a758efdcfe17ceadbe5e42c97942322998e7&o=" className="siImg" alt="" />
            <div className="siDescription">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button className="ratingBox">8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">
                        PKR 44,999
                    </span>
                    <span className="siTax">
                        Includes taxes and fees
                    </span>
                    <button className="siCheckBtn lsBtn">See Availablity</button>
                </div>
            </div>
        </div>
    )
}
