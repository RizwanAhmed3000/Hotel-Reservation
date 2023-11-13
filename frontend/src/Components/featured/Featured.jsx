import useFetch from "../../hooks/useFetch"
import "./featured.css"

export default function Featured() {

    const { data, loading, error } = useFetch("/hotels/countbycity?cities=Berlin,Rome,Istanbul,Paris")

    return (
        <>
            {loading ? "Loading please wait" : (<><div className="featured">
                <div className="overlay"></div>
                <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/03/11/fernsehturm.jpg' alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2>Berlin</h2>
                    <h3>{data[0]} properties</h3>
                </div>
            </div>
                <div className="featured">
                    <div className="overlay"></div>
                    <img src='https://www.thediaryofanomad.com/wp-content/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpg' alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h2>Rome</h2>
                        <h3>{data[1]} properties</h3>
                    </div>
                </div>
                <div className="featured">
                    <div className="overlay"></div>
                    <img src='https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg' alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h2>Istanbul</h2>
                        <h3>{data[2]} properties</h3>
                    </div>
                </div>
                <div className="featured">
                    <div className="overlay"></div>
                    <img src='https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg' alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h2>Pairs</h2>
                        <h3>{data[3]} properties</h3>
                    </div>
                </div></>)}
        </>
    )
}
