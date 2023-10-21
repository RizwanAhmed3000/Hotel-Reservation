import "./header.css";
import { AirplanemodeActiveOutlined, AttractionsOutlined, KingBedOutlined, LocalTaxiOutlined, TimeToLeaveOutlined } from '@mui/icons-material';

export default function Header() {

    // let headerListItems = [<KingBedOutlined />, <AirplanemodeActiveOutlined />, <TimeToLeaveOutlined />, <AttractionsOutlined />, <LocalTaxiOutlined />];
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
        <div className="header">
            <div className="headerWrapper">
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
            </div>
        </div >
    )
}
