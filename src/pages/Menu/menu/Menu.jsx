import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../menuCategory/MenuCategory";
const Menu = () => {
    const [offered] = useMenu('offered');
    const [dessert] = useMenu('dessert');
    const [pizza] = useMenu('pizza');
    const [salad] = useMenu('salad');
    const [soup] = useMenu('soup');
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover title="our menu" subtitle="Would you like to try a dish?" img={banner}></Cover>
            <MenuCategory menu={offered} title={1}></MenuCategory>

            <Cover title="dessert" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertImg}></Cover>
            <MenuCategory menu={dessert}></MenuCategory>

            <Cover title="pizza" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzaImg}></Cover>
            <MenuCategory menu={pizza}></MenuCategory>

            <Cover title="salad" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladImg}></Cover>
            <MenuCategory menu={salad}></MenuCategory>

            <Cover title="soup" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupImg}></Cover>
            <MenuCategory menu={soup}></MenuCategory>

        </div>
    );
};

export default Menu;