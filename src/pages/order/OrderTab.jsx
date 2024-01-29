import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";

const OrderTab = ({ items }) => {
    const { image, name, recipe, _id } = items;
    const { user } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    const [axiosSecure] = useAxiosSecure();
    const [, refetch] = useCart();
    const handleCart = () => {
        if (user) {
            const cartItem = {
                menuId: _id,
                name,
                recipe,
                image,
                email: user.email
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Item Added Succesfully', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "Your Are not logged in",
                showCancelButton: true,
                confirmButtonText: "Log in",
                denyButtonText: `Cancel`
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={handleCart}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTab;