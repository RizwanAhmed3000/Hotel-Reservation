import "./search.css";
import { CalendarTodayOutlined, KingBedOutlined, PersonOutlineOutlined } from '@mui/icons-material'

export default function Search() {
    return (
        <div className="search">
            <div className="searchWrapper">
                <div className="searchItems">
                    <KingBedOutlined />
                    <input type="text" placeholder="Search Hotels..." className="searchHotelsInput" />
                </div>
                <div className="searchItems">
                    <CalendarTodayOutlined />
                    <span className="checkInDateInput">date to date</span>
                </div>
                <div className="searchItems">
                    <PersonOutlineOutlined />
                    <span className="personSearch">2 adult 2 childern 1 room</span>
                </div>
                <button className="searchBtn">Search</button>
            </div>
        </div>
    )
}
