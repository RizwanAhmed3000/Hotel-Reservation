import useFetch from '../../hooks/useFetch'
import Skeleton from '../Skeleton/Skeleton'
import './propertyType.css'

export default function PropertyType() {
    const { data, loading, error } = useFetch("/hotels/countbytype")
    const images = [
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://lh3.googleusercontent.com/vP813IvJuejZWpcKD9TJqBcVuCuKTD_hf0rllrlpLvXUvwQl5EfaSnQAfAxqcMDRsM905nHNKEWbY8KdXNvva9PDNnNkkwL2ByG5GYo=s1024",
        "https://assets.cntraveller.in/photos/60ba18db8c5b530e1212763e/16:9/w_1024%2Cc_limit/Beach-villa-2-st-regis-maldives.jpg",
        "https://the-view-luxury-villas.com/wp-content/uploads/2019/11/Luxury-Villas-Lefkada-Infinity-Pool-und-Garten6.jpg",
        "https://www.travelandleisure.com/thmb/W9KQ1wbavKQN6GyqyMxNEghgfF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-gatlinburg-tennessee-CABINS0123-ac308b389b7b4526a3eb8f5703608f6f.jpg",
    ]
    return (
        <>
            {loading ? (<Skeleton type="feedSm"/>)
                :
                (<>
                    {data && images.map((image, i) => (
                        <div className='pt' key={i}>
                            <img src={image} alt="" />
                            <h3>{data[i]?.type}</h3>
                            <p>{data[i]?.count} properties</p>
                        </div>
                    ))}
                </>)
            }
        </>
    )
}
