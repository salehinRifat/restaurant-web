import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        signOutUser();
    }
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
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;