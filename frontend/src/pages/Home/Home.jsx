// import ResponsiveAppBar from '../../Components/Navbar(MUI)/NavbarMui';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/featured/Featured';
import './home.css';
import TopRatedCard from '../../Components/topRatedCards/TopRatedCard';

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
                    <TopRatedCard />
                    <TopRatedCard />
                    <TopRatedCard />
                    <TopRatedCard />
                </div>
            </div>
        </>
    )
}
