import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../shared/menuItem/MenuItem";

const MenuCategory = ({ menu, title }) => {
    return (
        <div>
            <div className="px-24 mt-10 mb-16">
                {title && <SectionTitle
                    heading="Today's offer"
                    subHeading="don't miss"
                ></SectionTitle>}
                <div className="grid grid-cols-2 gap-5">
                    {menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
                </div>
                <button className="btn btn-outline mt-6">Order Now</button>
            </div>
        </div>
    );
};

export default MenuCategory;