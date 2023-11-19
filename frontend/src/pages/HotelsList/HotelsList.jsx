import "./hotelsList.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import ListSearch from "../../Components/listSearchBox/ListSearch";
import SearchItem from "../../Components/searchItem/SearchItem";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Skeleton from "../../Components/Skeleton/Skeleton";

export default function HotelsList() {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const { data, loading, error, reFetchData } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)
    console.log(data, "===>>> data")

    function searchHandler() {
        reFetchData()
    }

    return (
        <div>
            <Navbar />
            <Header type={"hotelList"} />
            <div className="hotelListContainer">
                <div className="hotelListWrapper">
                    <div className="listSearch">
                        <ListSearch setDestination={setDestination} destination={destination} location={location} setMin={setMin} setMax={setMax} searchHandler={searchHandler} />
                    </div>
                    <div className="listResult">
                        {loading ? (<Skeleton type="list"/>) : <>
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
