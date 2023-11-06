import './hotel.css';
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';
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
                    <button className="bookNow lsBtn">Reserve or Book now</button>
                    <h1 className='hotelTitle'>Hotel Name</h1>
                    <div className="hotelAddress">
                        <LocationOn fontSize='15px' />
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
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelDetailTitle">Stay in the heart of Pakistan</h1>
                            <p className="hdDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem, necessitatibus quia corrupti officia ullam et omnis id animi adipisci natus culpa accusantium rem dicta at labore provident consectetur similique repudiandae unde maxime. Voluptate vero quidem laudantium natus placeat odit incidunt error ex? Expedita iste magnam reprehenderit voluptate, a explicabo quidem dolorem quibusdam doloremque ipsum voluptatum itaque adipisci, numquam voluptates id? Maiores cum quo vero autem explicabo dicta facere qui culpa atque rerum illum, nihil corporis iure fugit? Corrupti dolorum alias dicta cum, dolore deleniti tempora minima. Ea quae enim repellendus id nostrum, nam, quas eum iste minima perferendis culpa.
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
