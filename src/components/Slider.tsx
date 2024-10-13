import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';



const Slider = () => {
    return (
        <Swiper
            modules={[EffectFade]}
            effect="fade"
            navigation
            pagination={{clickable:true}}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            
        </Swiper>
    );
};

export default Slider;