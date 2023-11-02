import "./featured.css"

export default function Featured({ imgSrc, titles }) {
    return (
        <div className="featured">
            <div className="overlay"></div>
            <img src={imgSrc} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h2>{titles?.name}</h2>
                <h3>{titles?.noOfProperties} properties</h3>
            </div>
        </div>
    )
}
