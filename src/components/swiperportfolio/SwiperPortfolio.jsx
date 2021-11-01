import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './swiperportfolio.css';
import SwiperCore,
{
    EffectCoverflow,
    Pagination,
    Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// Import Swiper styles
// import 'swiperportfolio/css';

const SwiperPortfolio = ({ img, link, title, description, tools }) => {
    return (
        <div className="swiper-portfolio-container">
            <div className="title-container">
                {/* <div className="image-container">
                    <img className="img-test" src="/assets/flexercise_guy.png" alt="" />
                </div> */}
                <div className="swiper_title">
                    <span>Flexercise</span>
                </div>
            </div>
            <Swiper navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper">
                <SwiperSlide>
                    <a href="www.google.com">
                        <img src="assets/flexercise_guy.png" alt="" />
                    </a>
                    <p>Web app built for a NHS affiliated client to guide people on a motherhood journey towards a healthy balanced diet and lifestyle.</p>
                    <p>Built with: HTML, Sass, React, Firebase.</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/sun.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/sun.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/sun.png" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SwiperPortfolio;


{/* <Swiper
spaceBetween={50}
slidesPerView={3}
centeredSlides
onSlideChange={() => console.log("slide change")}
onSwiper={swiper => console.log(swiper)}
>
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
</Swiper> */}