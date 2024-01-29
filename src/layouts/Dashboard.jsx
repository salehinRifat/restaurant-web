import { FaAd, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex container mx-auto px-20 py-2">
            <div className="w-64 bg-orange-600 min-h-screen p-2">
                <ul className="flex flex-col gap-3">
                    <Link to={"/"}><li className="flex items-center text-lg gap-2"><FaHome></FaHome>User Home</li></Link>

                    <Link to={"/dashboard/cart"}><li className="flex items-center text-lg  gap-2"><FaShoppingCart></FaShoppingCart>My Cart</li></Link>
                    <Link to={"/dashboard/reservation"}><li className="flex items-center text-lg gap-2"><FaCalendar></FaCalendar>Reservation</li></Link>
                    <Link to={"/dashboard/review"}><li className="flex items-center text-lg  gap-2"><FaAd></FaAd>Add Review</li></Link>
                    <Link to={"/dashboard/bookings"}><li className="flex items-center text-lg gap-2"><FaCalendar></FaCalendar>My Bookings</li></Link>
                    <div className="divider my-0"></div>
                    <Link to={"/"}><li className="flex items-center text-lg gap-2"><FaHome></FaHome>User Home</li></Link>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;