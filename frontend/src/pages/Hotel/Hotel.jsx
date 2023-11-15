import './hotel.css';
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';
import { LocationOn } from '@mui/icons-material';
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom';

export default function Hotel() {
    const location = useLocation()
    // console.log(location)
    const hotelId = location.pathname.split("/")[2]
    // console.log(hotelId)

    const { data, loading, error, reFetchData } = useFetch(`/hotels/find/${hotelId}`)
    console.log(data)


    const photo = [
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326436125.jpg'
        },
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326436089.jpg'
        },
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326436145.jpg'
        },
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326436065.jpg'
        },
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326435201.jpg'
        },
        {
            src: 'https://cf2.bstatic.com/images/hotel/max1024x768/326/326435143.jpg'
        },
    ]

    return (
        <div>
            <Navbar />
            <Header type={"hotelList"} />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow lsBtn">Reserve or Book now</button>
                    <h1 className='hotelTitle'>{data?.name}</h1>
                    <div className="hotelAddress">
                        <LocationOn fontSize='15px' />
                        <span>{data?.address}</span>
                    </div>
                    <div className="hotelDistance">
                        Excellent loaction - {data?.distanceFromCityCenter} from the center
                    </div>
                    <div className="hotelPriceHighlights">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dicta.
                    </div>
                    <div className="hotelImgs">
                        {
                            data?.photo?.map((photo) => (
                                <div className="hotelImgWraper">
                                    <img src={photo} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelDetailTitle">{data?.title}</h1>
                            <p className="hdDesc">
                                {data?.description}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for 9-night stay</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis atque dolores rem ex cupiditate deleniti.</span>
                            <h2>
                                <b>PKR 144,000</b> for 9-nights
                            </h2>
                            <button className='lsBtn'>Reserve or Book now</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    )
}
