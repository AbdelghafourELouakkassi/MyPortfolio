import React from 'react'

import "./Projects.css"


import { useQuery, gql } from '@apollo/client';
import SwiperUi from './Swiper.jsx';



function Projects() {


  const projectsQuery = gql`
    {projects{
    id,
    title,
    description{text},
    utilities,
    codeLink,
    liveLink,
    image{url}
  }}
  `;



  const {data,loading,error}=useQuery(projectsQuery)

  return (
    <section className='projects-section' id='projects'>
      <h1>My Projects</h1>
      <SwiperUi Projects={data?.projects} />
    </section>
  )
}

export default Projects