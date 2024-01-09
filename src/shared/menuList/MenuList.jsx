import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuItem from "../menuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const MenuList = () => {
    const [menu] = useMenu('popular');
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             let popular = data.filter(item => item.category == "popular");
    //             setMenu(popular);
    //         })
    // }, [])

    return (
        <div className="px-24 mt-10 mb-16">
            <SectionTitle
                heading="from our menu"
                subHeading="check it out"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-5">
                {menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
        </div>
    );
};

export default MenuList;