import React from 'react'
import "./Skills.css"
import { Languages } from '../AdditionalComponents/ToolsAndLanguages'



function Skills() {

  return (
    <section className='skills-section' id='skills'>
      <h1>MySkills</h1>
      <div className='skills-info'>
       {Languages.map((lang)=>{
          return(
           <div key={lang.title}>
            <img src={lang.image} alt="dev-tool"  /><br />
            <p>{lang.title}</p>
           </div>
          )
       })}
      </div>
    </section>
  )
}

export default Skills