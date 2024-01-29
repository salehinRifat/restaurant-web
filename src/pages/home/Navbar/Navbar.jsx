import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        signOutUser();
    }
    const [cart] = useCart();
    console.log(cart);
    let li = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order/salad'}>Our Shop</Link></li>
        {user ? <button onClick={handleLogout} className="btn btn-success btn-xs">Logout</button> : <li><Link to={'/login'}>Login</Link></li>}

    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-50 lg:text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {li}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Restaurant Point</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                <div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;