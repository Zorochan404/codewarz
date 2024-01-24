// import React, { useEffect } from 'react'
import styled from 'styled-components'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"


import event1 from "../../assets/gallery/event1.jpg";
import event2 from "../../assets/gallery/event2.jpg";
import event3 from "../../assets/gallery/event3.jpg";
import event4 from "../../assets/gallery/event4.jpg";
import event5 from "../../assets/gallery/event5.jpg";
import event6 from "../../assets/gallery/event6.jpg";
import event7 from "../../assets/gallery/event7.jpg";
import event8 from "../../assets/gallery/event8.jpg";





import {Pagination,Navigation,Autoplay, EffectCards} from "swiper/modules"

// import Tube from "../../assets/3dtube.png";
// import Cone from "../../assets/3dtriangle.png";
// import Capsule from "../../assets/3dcapsule.png";

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
            <SwiperSlide><img src={event1} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event2} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event3} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event4} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event5} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event6} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event7} alt='gallary'/></SwiperSlide>
            <SwiperSlide><img src={event8} alt='gallary'/></SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousal