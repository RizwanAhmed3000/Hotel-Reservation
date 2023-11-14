import "./hotelsList.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import ListSearch from "../../Components/listSearchBox/ListSearch";
import SearchItem from "../../Components/searchItem/SearchItem";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

export default function HotelsList() {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const { data, loading, error } = useFetch(`/hotels?city=${destination}`)
    console.log(data, "===>>> data")

    return (
        <div>
            <Navbar />
            <Header type={"hotelList"} />
            <div className="hotelListContainer">
                <div className="hotelListWrapper">
                    <div className="listSearch">
                        <ListSearch destination={destination} location={location} />
                    </div>
                    <div className="listResult">
                        {loading ? "Loading please wait" : <>
                            {
                                data.map((item) => (
                                    <SearchItem data={item} key={item?._id} />
                                ))
                            }
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
