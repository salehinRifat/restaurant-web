import Cover from "../../shared/cover/Cover";
import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { FaPhoneSquareAlt, FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const Contact = () => {
    return (
        <div>
            <Cover title={"contact us"} subtitle={"would you like to try a dish?"} img={contactImg}></Cover>
            <div className="my-8">
                <SectionTitle heading={"our locatoin"} subHeading={"visit us"}></SectionTitle>
            </div>
            <div className="px-20">
                <section className="grid grid-cols-3 gap-5 my-10">
                    <div className="flex flex-col w-80">
                        <div className="bg-[#D1A054] text-white p-3 flex items-center justify-center">
                            <FaPhoneSquareAlt className="text-xl" />
                        </div>
                        <div className="bg-[#f3f3f3] text-center py-10 flex-1">
                            <h1 className="text-xl uppercase">Phone</h1>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-80">
                        <div className="bg-[#D1A054] text-white p-3 flex items-center justify-center">
                            <IoLocation className="text-xl"></IoLocation>
                        </div>
                        <div className="bg-[#f3f3f3] text-center py-10 flex-1">
                            <h1 className="text-xl uppercase">location</h1>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-80">
                        <div className="bg-[#D1A054] text-white p-3 flex items-center justify-center">
                            <FaClock className="text-xl" />
                        </div>
                        <div className="bg-[#f3f3f3] text-center py-10 flex-1">
                            <h1 className="text-xl uppercase">WORKING HOURS</h1>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Contact;