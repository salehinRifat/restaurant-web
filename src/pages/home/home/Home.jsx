import MenuList from "../../../shared/menuList/MenuList";
import Banner from "./banner/banner";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <MenuList></MenuList>
        </div>
    );
};

export default Home;