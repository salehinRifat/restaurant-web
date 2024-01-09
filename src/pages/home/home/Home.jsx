import { Helmet } from "react-helmet-async";
import MenuList from "../../../shared/menuList/MenuList";
import Banner from "./banner/banner";
import Category from "./category/Category";
import MenuInfo from "./menuInfo/MenuInfo";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Category></Category>
                <MenuList></MenuList>
                <MenuInfo></MenuInfo>
            </div></>
    );
};

export default Home;