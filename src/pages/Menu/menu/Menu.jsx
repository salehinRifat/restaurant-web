import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/cover/Cover";
import MenuList from "../../../shared/menuList/MenuList";
import banner from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover title="our menu" subtitle="Would you like to try a dish?" img={banner}></Cover>
            <MenuList></MenuList>
        </div>
    );
};

export default Menu;