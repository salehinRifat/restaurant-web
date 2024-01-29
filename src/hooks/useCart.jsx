import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const useCart = () => {
    const [asioxSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await asioxSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }

    })
    return [cart, refetch];
};

export default useCart;