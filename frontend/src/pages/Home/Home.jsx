// import ResponsiveAppBar from '../../Components/Navbar(MUI)/NavbarMui';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/featured/Featured';
import './home.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <div className="featuredItemsList">
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o='} titles={{ name: 'Lahore', noOfProperties: "120" }} />
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o='} titles={{ name: 'Lahore', noOfProperties: "120" }} />
                    <Featured imgSrc={'https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o='} titles={{ name: 'Lahore', noOfProperties: "120" }} />
                </div>
            </div>
        </>
    )
}
