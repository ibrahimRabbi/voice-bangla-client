 import Card from "@/components/ui/Card";
import Addthread from "@/components/AddThread/Addthread";
import { useGetThreadsQuery } from "@/redux/api/baseApi";
import { useGetUserQuery } from "@/redux/api/baseApi";
import { useLocation, useNavigate } from "react-router-dom";
import PostAction from "@/components/actions/PostAction";
import { useRef } from "react";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';



const HomePage = () => {
 
    const { data:threads } = useGetThreadsQuery({})
    const { data: user, isLoading:userIsLoading } = useGetUserQuery({})
    const navigate = useNavigate()
    const location = useLocation()
    const swiperRef = useRef<SwiperType>();



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
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={30}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                >
                    {
                        threads?.response?.map((v: any) => <SwiperSlide key={v._id}><Card key={v.id} data={v} /></SwiperSlide>)
                    }

                    <div className={`flex justify-between items-center mt-10`}>
                        <button onClick={() =>swiperRef.current?.slidePrev()}><img src='../../public/icons/Back.png' /></button>
                        <button onClick={() => swiperRef.current?.slideNext()}><img src='../../public/icons/Right.png' /></button>
                    </div>
                </Swiper>
           </div>     

            <div className="border mt-10">
                <PostAction />
            </div>
        </section>
    );
};

export default HomePage;

 