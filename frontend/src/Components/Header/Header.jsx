import "./header.css";
import { AirplanemodeActiveOutlined, AttractionsOutlined, KingBedOutlined, LocalTaxiOutlined, TimeToLeaveOutlined } from '@mui/icons-material';
import Search from "../Search/Search";

export default function Header({ type }) {

    let headerListItems = [
        {
            icon: <KingBedOutlined />,
            title: 'Stay',
            active: true
        },
        {
            icon: <AirplanemodeActiveOutlined />,
            title: 'Flights',
            active: false
        },
        {
            icon: <TimeToLeaveOutlined />,
            title: 'Cars Rentals',
            active: false
        },
        {
            icon: <AttractionsOutlined />,
            title: 'Attractions'
        },
        {
            icon: <LocalTaxiOutlined />,
            title: 'Airport Taxi',
            active: false
        },
    ];

    return (
        <>
            <div className="header">
                <div className={type === 'hotelList' ? "headerWrapper listMode" : "headerWrapper"}>
                    <div className="headerList" >
                        {
                            headerListItems.map((item, index) => (
                                <div className={item?.active ? "headerListItems active" : "headerListItems"}>
                                    <span className="item" key={index}>
                                        {item?.icon}{item?.title}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    {
                        type === 'hotelList' ? '' : (
                            <div className="headerText">
                                <h1 className="headerTitle">Find your next stay</h1>
                                <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
                            </div>
                        )
                    }
                </div>
                {
                    type === 'hotelList' ? '' : (
                        <Search />
                    )
                }
            </div >
        </>
    )
}
