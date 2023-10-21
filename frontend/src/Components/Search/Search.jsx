import "./search.css";
import { CalendarTodayOutlined, KingBedOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Search() {

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [showDate, setShowDate] = useState(false)

    return (
        <div className="search">
            <div className="searchWrapper">
                <div className="searchItems">
                    <KingBedOutlined />
                    <input type="text" placeholder="Search Hotels..." className="searchHotelsInput" />
                </div>
                <div className="searchItems reactDateRange" onClick={() => setShowDate(!showDate)}>
                    <CalendarTodayOutlined />
                    <span className="checkInDateInput" >date to date</span>
                    {
                        showDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="dateRange"
                        />
                    }
                </div>
                <div className="searchItems">
                    <PersonOutlineOutlined />
                    <span className="personSearch optionsList">2 adult 2 childern 1 room</span>
                </div>
                <button className="searchBtn">Search</button>
            </div>
        </div>
    )
}
