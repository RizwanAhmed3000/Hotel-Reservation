import "./search.css";
import { CalendarTodayOutlined, KingBedOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom'
import { SearchContext } from "../../Context/SearchContext";

export default function Search() {

    const { dispatch } = useContext(SearchContext)
    const navigate = useNavigate()

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [destination, setDestination] = useState("")
    const [showDate, setShowDate] = useState(false)
    const [showOpitons, setShowOptions] = useState(false)
    const [options, setOptions] = useState({
        adults: 1,
        childern: 0,
        room: 1,
    })

    function optionHandler(name, opertation) {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: opertation === 'inc' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    function searchHandler() {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate('/hotels', { state: { destination, dates, options } })
    }

    return (
        <div className="search">
            <div className="searchWrapper">
                <div className="searchItems">
                    <KingBedOutlined />
                    <input type="text" placeholder="Search Hotels..." className="searchHotelsInput" onChange={e => setDestination(e.target.value)} />
                </div>
                <div className="searchItems reactDateRange" onClick={() => setShowDate(!showDate)}>
                    <CalendarTodayOutlined />
                    <span className="checkInDateInput" >{`${format(dates[0]?.startDate, "dd/MM/yyyy")} to ${format(dates[0]?.endDate, "dd/MM/yyyy")}`}</span>
                    {
                        showDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="dateRange"
                            minDate={new Date()}
                        />
                    }
                </div>
                <div className="searchItems optionsList" >
                    <PersonOutlineOutlined />
                    <span className="personSearch " onClick={() => setShowOptions(!showOpitons)}>{`${options.adults} adult ${options.childern} childerns ${options.room} rooms`}</span>
                    {
                        showOpitons && <Options optionHandler={optionHandler} opitons={options} />
                    }
                </div>
                <button className="searchBtn" onClick={searchHandler}>Search</button>
            </div>
        </div>
    )
}

function Options({ optionHandler, opitons }) {
    return (
        <>
            <div className="optionsBox">
                <div className="option">
                    <span className="optionText">
                        Adult
                    </span>
                    <div className="optionCounter">
                        <button disabled={opitons.adults <= 1} className="optionCounterMinus" onClick={() => optionHandler("adults", "dec")}>-</button>
                        <span className="optionCounterNumber">{opitons.adults}</span>
                        <button className="optionCounterPlus" onClick={() => optionHandler("adults", "inc")}>+</button>
                    </div>
                </div>
                <div className="option">
                    <span className="optionText">
                        Children
                    </span>
                    <div className="optionCounter">
                        <button disabled={opitons.childern <= 0} className="optionCounterMinus" onClick={() => optionHandler("childern", "dec")}>-</button>
                        <span className="optionCounterNumber">{opitons.childern}</span>
                        <button className="optionCounterPlus" onClick={() => optionHandler("childern", "inc")}>+</button>
                    </div>
                </div>
                <div className="option">
                    <span className="optionText">
                        Room
                    </span>
                    <div className="optionCounter">
                        <button disabled={opitons.room <= 1} className="optionCounterMinus" onClick={() => optionHandler("room", "dec")}>-</button>
                        <span className="optionCounterNumber">{opitons.room}</span>
                        <button className="optionCounterPlus" onClick={() => optionHandler("room", "inc")}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}