import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Slide } from "react-awesome-reveal";

const bannerPromise = fetch('/banner.json').then(res => res.json());
const Banner = () => {
  const banner = use(bannerPromise);
  return (
    <div className='bg-secondary'>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          banner.map(banner =>
            <SwiperSlide key={banner.id}>
              <>
                <div className="max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-5 gap-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 py-[100px] md:py-[100px] lg:py-[100px]">
                 
                    <div className="col-span-3 ">
                      <div className="w-full md:w-9/12 lg:w-9/12 space-y-4 text-start ">
                      <Slide direction="left">
                        <h1 className='text-gray-200 text-2xl md:text-3xl lg:text-5xl font-bold'>{banner.title}</h1>
                        <p className='text-gray-200'>{banner.description}</p>
                        <p className='text-primary font-bold border-2 border-primary p-2 w-fit rounded-2xl'>{banner.alt}</p>
                        <button className='btn btn-xl text-white shadow-none bg-primary'>Get Started</button>
                      </Slide>
                      </div>

                    </div>
                 

                  
                    <div className="col-span-2 ">
                      <div className="w-full h-full md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
                      <Slide direction="right">
                        <img className='w-full object-contain' src={banner.image} alt={banner.alt} />
                      </Slide>
                      </div>
                    </div>
                 

                </div>
              </>
            </SwiperSlide>)
        }
      </Swiper>

    </div>
  );
};

export default Banner;