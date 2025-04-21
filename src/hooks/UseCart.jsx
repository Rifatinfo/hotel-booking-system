import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseCart = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
    const { refetch , isPending, data : cart = [] } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    
    return [cart, isPending, refetch ];

    
};

export default UseCart;