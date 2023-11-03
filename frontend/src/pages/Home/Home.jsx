// import ResponsiveAppBar from '../../Components/Navbar(MUI)/NavbarMui';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/featured/Featured';
import './home.css';
import TopRatedCard from '../../Components/topRatedCards/TopRatedCard';
import PropertyType from '../../Components/propertyType/PropertyType';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <div className="featuredDestinations">
                    <h1>Trending destinations</h1>
                    <p>Most popular choices for travelers from Pakistan</p>
                </div>
                <div className="featuredItemsList">
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o='} titles={{ name: 'Lahore', noOfProperties: "120" }} />
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o='} titles={{ name: 'Dubai', noOfProperties: "230" }} />
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o='} titles={{ name: 'Islamabad', noOfProperties: "52" }} />
                </div>
                <h1 className="homeGuestLove">Homes guests love</h1>
                <div className="topRatedHomesList">
                    <TopRatedCard data={{ name: 'Aparthotel Stare Miasto', img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=', rating: '8.7', reviews: '2,475', price: '44,200' }} />
                    <TopRatedCard data={{ name: '7Season Apartment', img: 'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=', rating: '8.7', reviews: '9000', price: '44,900' }} />
                    <TopRatedCard data={{ name: 'Oriente Palace', img: 'https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=', rating: '8.9', reviews: '3,000', price: '40,123' }} />
                    <TopRatedCard data={{ name: 'Flora Chiado Apartment', img: 'https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o=', rating: '9.7', reviews: '100', price: '128,601' }} />
                </div>
                <h1 className="propertyType">Browse by property type</h1>
                <div className="propertyTypeList">
                    <PropertyType data={{ type: 'Hotels', img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=' }} />
                    <PropertyType data={{ type: 'Apartments', img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=' }} />
                    <PropertyType data={{ type: 'Resorts', img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=' }} />
                    <PropertyType data={{ type: 'Villas', img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=' }} />
                    <PropertyType data={{ type: 'Cabins', img: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=' }} />
                </div>
            </div>
            <MailList />
            <Footer />
        </>
    )
}
