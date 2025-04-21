/* eslint-disable no-undef */
import HotelCard from "../../Componets/HotelCard/HotelCard";
import useBooking from "../../hooks/useBooking";
import UseCart from "../../hooks/UseCart";

const AvailableRoom = () => {
    const [hotels] = useBooking();
    const [cart] = UseCart();
    return (
        <div className="max-w-7xl mx-auto mt-30">
            <div className="mt-6 mb-6">
                <div className="flex justify-between items-center mt-4">
                    <h2 className="md:text-4xl text-xl font-semibold">Booking : {cart.length}</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-2">
                {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
            </div>
        </div>
    );
};

export default AvailableRoom;