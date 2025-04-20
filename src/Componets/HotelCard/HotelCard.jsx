
const HotelCard = ({ hotel }) => {
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
          <button className="btn mt-4 w-full bg-[#C73450] text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    );
  };

  export default HotelCard