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
                    <Featured />
                </div>
                <h1 className="homeGuestLove">Homes guests love</h1>
                <div className="topRatedHomesList">
                    <TopRatedCard />
                </div>
                <h1 className="propertyType">Browse by property type</h1>
                <div className="propertyTypeList">
                    <PropertyType />
                    
                </div>
            </div>
            <MailList />
            <Footer />
        </>
    )
}
