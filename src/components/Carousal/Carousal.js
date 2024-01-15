import React, { useEffect } from 'react'
import styled from 'styled-components'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"


import {Pagination,Navigation,Autoplay, EffectCards} from "swiper/modules"

import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";
import Arrow from "../../assets/Arrow.svg"

const Container = styled.div`
width:25vw;
height:70vh;
@media only Screen and (max-width: 48em){
    height: 50vh;
    width: 70vw;
    
}
.swiper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

}
.swiper-button-next{
    color: var(--black);

}
.swiper-button-prev{
    color: var(--black);

}
`

function Carousal() {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type: 'fraction',
        }}
        scrollbar={{
            draggable:true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination,Navigation,Autoplay]}
        className='mySwiper'>
            <SwiperSlide><img src={Cone} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={Tube} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={Capsule} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={Cone} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={Tube} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={Capsule} alt='gallary'/></SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousal