
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'
import img4 from '../../../../assets/home/slide4.jpg'
import img5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className='py-10'>
            <SectionTitle heading={"order online"} subHeading={"From 11am to 10pm"}></SectionTitle>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h3 className='text-4xl uppercase text-center -ml-[48px] -mt-20 text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h3 className='text-4xl uppercase text-center -ml-[48px] -mt-20  text-white'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h3 className='text-4xl uppercase text-center -ml-[48px] -mt-20 text-white'>soup</h3></SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className='text-4xl uppercase text-center -ml-[48px] -mt-20 text-white'>Desert</h3></SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h3 className='text-4xl uppercase text-center  text-white'>Salad</h3></SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;