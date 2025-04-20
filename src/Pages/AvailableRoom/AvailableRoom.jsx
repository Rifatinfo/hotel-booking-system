/* eslint-disable no-undef */
import HotelCard from "../../Componets/HotelCard/HotelCard";
import useBooking from "../../hooks/useBooking";

const AvailableRoom = () => {
    const [hotels] = useBooking();
    return (
        <div className="max-w-7xl mx-auto mt-30">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-2">
                {hotels.map(hotel => <HotelCard hotel={hotel} />)}
            </div>
        </div>
    );
};

export default AvailableRoom;