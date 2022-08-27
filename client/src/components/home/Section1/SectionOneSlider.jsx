import React from 'react'
import Section1Hero from './SectionOneHero.jsx';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// Data
import Works from '../../../data/Works';

  let count = 1;

export default function SectionOneSlider(props) {

    return (
    <Swiper 
      pagination={true} 
      modules={[Autoplay]} 
      autoplay={{
        delay:2500
      }}
      onSlideChange={()=> {
        if(count == Works.length)
          count=1
        else 
          count++
        props.countt(count)    
      }}
      className="mySwiper h-auto">
      {
        Works.map((item) =>(
        <SwiperSlide
        key={item.id}
        > 
          <Section1Hero image={item.image}/>
        </SwiperSlide>
        ))
      }
    </Swiper>
    )
}
