import { Outlet } from "react-router-dom";
import Footer from "../pages/home/Footer/Footer";
import Navbar from "../pages/home/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;