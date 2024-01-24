import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/home/Footer/Footer";
import Navbar from "../pages/home/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            <ToastContainer />
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;