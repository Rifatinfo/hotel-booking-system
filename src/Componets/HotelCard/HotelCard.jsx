import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";

const HotelCard = ({ hotel }) => {
  const {_id, name ,  price, image} = hotel;
  const { user } = UseAuth();
  const [ , , refetch] = UseCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email){
          const bookingItem = {
            bookingId : _id,
            email : user.email,
            price,
            image,
            name          
          }

          axiosSecure.post("/carts", bookingItem)
          .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                title: "added To The Cart successfully!",
                icon: "success",
                draggable: true
              });
              refetch();
            }
          })

    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: " Please Login Add To the Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login In!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in', {state : {from : location}})
        }
      });
    }
  }
  return (
    <div className="max-w-sm  rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt={hotel.name} />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{hotel.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{hotel.location}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{hotel.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[#C73450]">${hotel.price}/night</span>
          <span className="text-sm text-yellow-500 font-medium">⭐⭐ {hotel.rating}</span>
        </div>
        <button onClick={() => handleAddToCart(hotel)} className="btn mt-4 w-full bg-[#C73450] text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;