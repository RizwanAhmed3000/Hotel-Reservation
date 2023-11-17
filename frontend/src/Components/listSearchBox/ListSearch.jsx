import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import './listSearch.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useFetch from '../../hooks/useFetch'


export default function ListSearch({ setDestination, destination, location, setMin, setMax, searchHandler }) {
    // const location = useLocation()
    // console.log(location)

    const [dates, setDates] = useState(location.state.dates)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    // const { data, loading, error } = useFetch(`/hotels?city=${destination}`)
    // console.log(data, "==>> data")
    // setDataFromSearch(data)
    // setLoadingFromSearch(loading)



    return (
        <div className='lsContainer'>
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input type="text" placeholder={destination} onChange={e => setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
                <label htmlFor="">Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(dates[0]?.startDate, "dd/MM/yyyy")} to ${format(dates[0]?.endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && <DateRange onChange={item => setDates(item.selection)} minDate={new Date()} ranges={dates} editableDateInputs={true} moveRangeOnFirstSelection={false} />}
            </div>
            <div className="lsItem">
                <label htmlFor="">Options</label>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Min Price <small>per night</small>
                    </span>
                    <input type="number" onChange={e => setMin(e.target.value)} className='lsOptionInput' />
                </div>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Max Price <small>per night</small>
                    </span>
                    <input type="number" onChange={e => setMax(e.target.value)} className='lsOptionInput' />
                </div>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Adults
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={options?.adults} />
                </div>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Children
                    </span>
                    <input type="number" min={0} className='lsOptionInput' placeholder={options?.childern} />
                </div>
                <div className="lsOptionItem">
                    <span className="lsOptionText">
                        Room
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={options?.room} />
                </div>
            </div>
            <button className='lsBtn' onClick={searchHandler}>Search</button>
        </div>
    )
}
