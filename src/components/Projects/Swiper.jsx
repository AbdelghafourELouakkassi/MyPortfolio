import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from "react-icons/go";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperUi({Projects}) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            Projects?.map((project)=>{
                return(
                  <div  key={project.title}>
                    <SwiperSlide >
                            <div className='project'>
                                <img src={project.image.url} width={"100%"} alt="" />
                                <span className='title'>{project.title}</span>
                                <p className='utilities'>{project.utilities.split(" ").map((utl)=><span className='utilitie-style'>{utl}</span>)}</p>
                                <div className='links'>
                                <span><a href={project.codeLink} target='_blank' ><FaGithub color='black' size={34}/></a></span>
                                <span><a href={project.liveLink} target='_blank' ><GoLinkExternal color='black' size={34}/></a></span>
                                </div>
                            </div>
                    </SwiperSlide>
                  </div>
                  
                  
                )
            })
        }
      </Swiper>
    </>
  );
}
