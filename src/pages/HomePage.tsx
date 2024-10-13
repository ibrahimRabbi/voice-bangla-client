 import Card from "@/components/ui/Card";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import Addthread from "@/components/AddThread/Addthread";
import { useGetThreadsQuery } from "@/redux/api/baseApi";
import { useGetUserQuery } from "@/redux/api/baseApi";
// import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import PostAction from "@/components/actions/PostAction";

 




const HomePage = () => {

    const swiper = useSwiper()
    const { data:threads } = useGetThreadsQuery({})
    const { data: user, isLoading:userIsLoading } = useGetUserQuery({})
    const navigate = useNavigate()
    const location = useLocation()
    



    if ( userIsLoading ) {
        return <h1 className="text-4xl">Loading...</h1>
    }

    if (!user?.success) {
        navigate('/sign-in', { state: location.pathname })
    } 



 
    return (
        
        <section className="mb-6">
            <Addthread/>
            <div className={`mt-10`}>
                <Swiper
                    modules={[EffectFade, Navigation]}
                    effect={'fade'}
                    spaceBetween={50}
                    slidesPerView={3}
                    
                >
                    {
                        threads?.response.map((v: any) => <SwiperSlide key={v._id}><Card key={v.id} data={v} /></SwiperSlide>)
                    }
                </Swiper>
           </div>
            
            <div className={`flex justify-between items-center mt-10`}>
                <button onClick={()=> swiper.slidePrev()}><img src='../../public/icons/Back.png'/></button>
                <button onClick={() => swiper.slideNext()}><img src='../../public/icons/Right.png'/></button>
            </div>

            <div className="border mt-12">
                <PostAction />
            </div>
        </section>
    );
};

export default HomePage;

// onSwiper = {(swiper) => console.log(swiper)}