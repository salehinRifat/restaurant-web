import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import featuredInmg from "../../../../assets/home/featured.jpg"
import './menuinfo.css'
const MenuInfo = () => {
    return (
        <div className="featured bg-fixed py-10">
            <div className="text-white">
                <SectionTitle
                    heading={"from our menu"}
                    subHeading={"check it out"}
                ></SectionTitle>
            </div>
            <div className="flex gap-8 px-24">
                <div>
                    <img src={featuredInmg} alt="" />
                </div>
                <div className="space-y-2 text-white">
                    <h2 className="text-lg">March 20, 2023</h2>
                    <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio officiis culpa, eius quae adipisci amet excepturi consectetur harum fugit ea nemo, molestiae provident eligendi nostrum dolor! Animi, sed! Quaerat aliquid aut quod architecto natus earum obcaecati ab, voluptatum, labore voluptas totam, dolor numquam ad? Sint suscipit earum temporibus natus?</p>
                    <button className="btn btn-outline  border-b-4 text-white">Default</button>
                </div>
            </div>
        </div>
    );
};

export default MenuInfo;