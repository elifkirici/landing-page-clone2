import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../style.css';
import { Autoplay} from "swiper";

function CustomerQuotesSection() {
    return (
        <>
        <Swiper
         slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
        navigation={true}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </>
      );
}

export default CustomerQuotesSection