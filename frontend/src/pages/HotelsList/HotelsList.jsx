import "./hotelsList.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import ListSearch from "../../Components/listSearchBox/ListSearch";
import SearchItem from "../../Components/searchItem/SearchItem";

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
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
