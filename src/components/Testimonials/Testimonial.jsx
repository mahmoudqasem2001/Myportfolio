import React from 'react'
import './testimonial.css'
import AVITAR1 from '../../assets/av1.jpg'
import AVITAR2 from '../../assets/av2.jpg'
import AVITAR3 from '../../assets/av3.png'
import AVITAR4 from '../../assets/av4.jpg'

// import Swiper core and required modules
import { Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVITAR1,
    name: 'Alex Sam',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus maiores, nobis sit laboriosam tempore nemo deserunt voluptatem iste aperiam dolorem harum fuga ipsa corporis velit ea quibusdam vel. Id?',

  },
  {
    avatar: AVITAR2,
    name: 'Carla',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus maiores, nobis sit laboriosam tempore nemo deserunt voluptatem iste aperiam dolorem harum fuga ipsa corporis velit ea quibusdam vel. Id?',

  },
  {
    avatar: AVITAR3,
    name: 'Ferman',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus maiores, nobis sit laboriosam tempore nemo deserunt voluptatem iste aperiam dolorem harum fuga ipsa corporis velit ea quibusdam vel. Id?',

  },
  {
    avatar: AVITAR4,
    name: 'Goesh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus maiores, nobis sit laboriosam tempore nemo deserunt voluptatem iste aperiam dolorem harum fuga ipsa corporis velit ea quibusdam vel. Id?',

  }




]



const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
        // install Swiper modules
        modules={[ Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avater">
                  <img src={avatar} alt={avatar} />
                </div>
                <h5>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            )


          })

        }


      </Swiper>
    </section>
  )
}

export default Testimonial