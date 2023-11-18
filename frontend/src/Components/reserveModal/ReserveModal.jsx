import { Close } from '@mui/icons-material'
import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { SearchContext } from '../../Context/SearchContext'
import useFetch from '../../hooks/useFetch'
import './reserve.css'

export default function ReserveModal({ setOpenModal, hotelId }) {
    const { dates } = useContext(SearchContext)
    const { data, loading, error, reFetchData } = useFetch(`/hotels/room/${hotelId}`)
    // console.log(data)
    const [selectedRoom, setSelectedRoom] = useState([])
    const roomSelectHnadler = (e) => {
        const select = e.target.checked
        const value = e.target.value
        setSelectedRoom(
            select ? [...selectedRoom, value] : selectedRoom.filter(item => item !== value)
        )
    }

    const getDateInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());
        let list = [];
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1)
        }
        return list
    }

    const allDates = getDateInRange(dates[0].startDate, dates[0].endDate)

    // console.log(selectedRoom, "==>> rooms selected")

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()))
        return !isFound
    }

    const reserveHandler = async () => {
        try {
            await Promise.all(selectedRoom.map(roomId => {
                const res = axios.put(`/rooms/available/${roomId}`, { dates: allDates })
                // console.log(res.data)
                return res.data 
            }))
            setOpenModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='reserve'>
            <div className="rContainer">
                <span onClick={() => setOpenModal(false)}>
                    <Close style={{ cursor: "pointer" }} />
                </span>
                <div>Select Your Room:</div>
                {
                    data.map((item) => (
                        <>
                            <div className="rItem" key={item?._id}>
                                <div className="rItemInfo">
                                    <div className="rTitle">{item?.title}</div>
                                    <div className="rDesc">{item?.description}</div>
                                    <div className="rMax">Max People: <b>{item?.maxPeople}</b></div>
                                    <div className="rPrice">{item?.price}</div>
                                </div>
                                <div className="rSelectRooms">
                                    {
                                        item?.roomNumber.map((room) => {
                                            return (
                                                <div className="room">
                                                    <label htmlFor="">{room?.number}</label>
                                                    <input type="checkbox" value={room?._id} onChange={roomSelectHnadler} disabled={!isAvailable(room)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }
                <button className='searchBtn' onClick={reserveHandler}>Reserve Now!</button>
            </div>
        </div >
    )
}
