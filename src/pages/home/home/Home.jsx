import MenuList from "../../../shared/menuList/MenuList";
import Banner from "./banner/banner";
import Category from "./category/Category";
import MenuInfo from "./menuInfo/MenuInfo";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <MenuList></MenuList>
            <MenuInfo></MenuInfo>
        </div>
    );
};

export default Home;