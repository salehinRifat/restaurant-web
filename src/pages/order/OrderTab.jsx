import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const OrderTab = ({ items }) => {
    const { image, name, recipe } = items;
    const { user } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    const handleCart = (items) => {
        console.log(items);
        if (user) {
            console.log(user);
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
                        <button className="btn" onClick={() => handleCart(items)}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTab;