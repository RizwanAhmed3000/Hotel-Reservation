import "./hotelsList.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import ListSearch from "../../Components/listSearchBox/ListSearch";

export default function HotelsList() {
    return (
        <div>
            <Navbar />
            <Header type={"hotelList"} />
            <div className="hotelListContainer">
                <div className="hotelListWrapper">
                    <div className="listSearch">
                        <ListSearch />
                    </div>
                    <div className="listResult">

                    </div>
                </div>
            </div>
        </div>
    )
}
