import React from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

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
              modules={[EffectFade]} effect="fade"
              
      
              
               >
              <SwiperSlide className="hero-container slide-1" >
              <div className="hero-title">
                <h1>Lorem Impsum dolor ist amet</h1>
                <p>Lorem impsum dolor sit amet lorem lorem</p>
                <button className="cta-1">Las quiero</button>
              
              </div>
                <div className="hero-image">
                <img alt="" src="https://i.ibb.co/Z2PC2pF/slide-1.png"></img>
                </div>
  
              </SwiperSlide>

              <SwiperSlide className="hero-container" >
              <div className="hero-title">
                <h1>Lorem Impsum dolor ist amet</h1>
                <p>Lorem impsum dolor sit amet lorem lorem</p>
                <button className="cta-1">Las quiero</button>
              
              </div>
                <div className="hero-image">
                <img alt="" src="https://i.ibb.co/Z2PC2pF/slide-1.png"></img>
                </div>
  
              </SwiperSlide>


 
            </Swiper>  
        </>
    )
}

export default HeroSection
