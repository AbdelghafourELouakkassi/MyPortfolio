import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from "react-icons/go";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function SwiperUi({Projects}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >

              {
                  Projects?.map(project=>
                          <SwiperSlide key={project.id} >
                                  <div className='project'>
                                      <img src={project.image.url} width={"100%"} alt="" />
                                      <span className='title'>{project.title}</span>
                                      <p className='utilities'>{project.utilities.split(" ").map((utl)=><span className='utilitie-style' key={utl}>{utl}</span>)}</p>
                                      <div className='links'>
                                      <span><a href={project.codeLink} target='_blank' ><FaGithub color='black' size={34}/></a></span>
                                      <span><a href={project.liveLink} target='_blank' ><GoLinkExternal color='black' size={34}/></a></span>
                                      </div>
                                  </div>
                          </SwiperSlide>                  
                        
                      )
              }
        
      </Swiper>
    </>
  );
}
