import './hotel.css';
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header';
import { LocationOn } from '@mui/icons-material';

export default function Hotel() {

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
                    <h1 className='hotelTitle'>Hotel Name</h1>
                    <div className="hotelAddress">
                        <LocationOn />
                        <span>this is the address</span>
                    </div>
                    <div className="hotelDistance">
                        Excellent loaction - 500m from the center
                    </div>
                    <div className="hotelPriceHighlights">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dicta.
                    </div>
                    <div className="hotelImgs">
                        {
                            photo.map((photo) => (
                                <div className="hotelImgWraper">
                                    <img src={photo?.src} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
