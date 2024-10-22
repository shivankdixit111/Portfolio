import React from 'react'
import ProjectBackgroundImg from '../../assets/photo-C8q0KQHG.webp'

const ProjectCard = ({title,main,url, demo, srcCode}) => {
  return (
    <div className='flex flex-col hover:scale-105 justify-between p-3 my-3 mx-3 md:p-6 w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4 hover:scale-100 ' src={url} alt="" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-tight'>{title}</h3>
        <p className='px-4 py-2 font-extralight text-md md:text-md leading-normal '>{main}</p>
        <div>
            <a href={demo}>
                <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-2 hover:opacity-85 
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' >Demo</button>
            </a>

            <a href={srcCode}>
                <button className='md:mt-10 text-white py-2 mx-2 px-3 text-sm md:text-lg md:py-2 md:px02 hover:opacity-85 
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Source Code</button>
            </a>
            
           
        </div>
    </div>
  )
}

export default ProjectCard