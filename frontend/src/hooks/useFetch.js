import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const controller = new AbortController()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url, { signal: controller.signal })
                setData(response.data.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData();
        return function () {
            controller.abort();
        }
    }, [])

    const reFetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url, { signal: controller.signal })
            setData(response.data.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    return { data, loading, error, reFetchData }
}

export default useFetch