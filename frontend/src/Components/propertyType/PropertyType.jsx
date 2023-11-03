import './propertyType.css'

export default function PropertyType({ data }) {
    return (
        <div className='pt'>
            <img src={data?.img} alt="" />
            <h3>{data?.type}</h3>
        </div>
    )
}
