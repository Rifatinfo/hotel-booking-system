import axios from "axios";

const axiosSecure  =  axios.create({
    baseURL: 'https://hotel-booking-server-pmn7.onrender.com/',
    
  });

const UseAxiosSecure = () => {
    return  axiosSecure;
};

export default UseAxiosSecure;
