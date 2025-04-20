import { useEffect, useState } from "react";

const useBooking = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState([]);
    console.log(hotels);

    useEffect(() => {
        fetch('http://localhost:5000/all-booking-info')
            .then(res => res.json())
            .then(data => {
                setHotels(data);
                setLoading(false)
            })
    }, [])

    return [hotels, loading]
};

export default useBooking;