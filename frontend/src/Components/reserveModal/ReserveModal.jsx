import { Close } from '@mui/icons-material'
import useFetch from '../../hooks/useFetch'
import './reserve.css'

export default function ReserveModal({ setOpenModal, hotelId }) {
    const { data, loading, error, reFetchData } = useFetch(`/hotels/room/${hotelId}`)
    console.log(data)

    return (
        <div className='reserve'>
            <div className="rContainer">
                <span onClick={() => setOpenModal(false)}>
                    <Close />
                </span>
                <div>Select Your Room:</div>
                {
                    data.map((item) => (
                        <>
                            <div className="ritem">
                                <div className="rItemInfo">
                                    <div className="rTitle">{item?.title}</div>
                                    <div className="rDesc">{item?.description}</div>
                                    <div className="rMax">{item?.maxPeople}</div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
