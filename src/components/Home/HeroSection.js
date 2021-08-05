import React from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Autoplay, Pagination])


function HeroSection() {
    return (
        <>
          <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              autoplay={true}
              speed = {600}
              pagination={{ clickable: true }}
               >
              <SwiperSlide>
              <div className="hero-title">
                <h1>Lorem Impsum dolor ist amet</h1>
              
              </div>
                <div>
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03741ea3-d06b-4d79-aa32-cd1829ace65a/calzado-de-running-air-zoom-pegasus-38-Rl7WJR.png"></img>
                </div>
  
              </SwiperSlide>

              <SwiperSlide>
              <div className="hero-title">
                <h1>Lorem Impsum dolor ist amet</h1>
              
              </div>
                <div>
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03741ea3-d06b-4d79-aa32-cd1829ace65a/calzado-de-running-air-zoom-pegasus-38-Rl7WJR.png"></img>
                </div>
  
              </SwiperSlide>
 
            </Swiper>  
        </>
    )
}

export default HeroSection
