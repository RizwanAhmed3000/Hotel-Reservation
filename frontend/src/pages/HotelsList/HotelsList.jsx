import "./hotelsList.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'

export default function HotelsList() {
    return (
        <div>
            <Navbar />
            <Header type={"hotelList"}/>
        </div>
    )
}
