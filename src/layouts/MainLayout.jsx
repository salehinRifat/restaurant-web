import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/home/Footer/Footer";
import Navbar from "../pages/home/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname == '/login' || <Navbar></Navbar>}
            <Outlet></Outlet>
            {location.pathname == '/login' || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;