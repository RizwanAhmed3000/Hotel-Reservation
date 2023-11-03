import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import './listSearch.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function ListSearch() {
    const location = useLocation()
    // console.log(location)

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div className='lsContainer'>
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
                <label htmlFor="">Description</label>
                <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
                <label htmlFor="">Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(date[0]?.startDate, "dd/MM/yyyy")} to ${format(date[0]?.endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && <DateRange onChange={item => setDate(item.selection)} minDate={new Date()} ranges={date} editableDateInputs={true} moveRangeOnFirstSelection={false} />}
            </div>
            <div className="lsItem">
                <label htmlFor="">Options</label>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Min Price <small>per night</small>
                    </span>
                </div>
            </div>
        </div>
    )
}
