import React from 'react'
import avtarImg from '../../assets/avtarImg.jpg' 
import TextChange from '../../TextChange'

const Home = () => {
  return (
    <div id='Home' className='text-white flex flex-row justify-evenly items-center p-10 mb-48 mt-2 md:p-5'>
        <div className='w-1/2'>
            <h1 className='mb-5 font-bold leading-normal tracking-tighter text-3xl md:text-6xl'><TextChange/></h1>
            <p className='mb-5 text-sm md:text-2xl tracking-tighter'>"I am a third-year Computer Science undergraduate from Ambalika Institute of Management and Technology. I actively
               develop web applications, building my full-stack skills, and enjoy solving complex problems through competitive programming. " 
           </p>
            <button className='mt-5 md:md-10 py-2 px-3 text-sm md:text-sm md:text-lg md:py-2 md:px-4  text-white
               hover:opacity-85 duration-300 hover:scale-195 font-semibold rounded-3xl bg-[#465697]'>
                <a href="https://drive.google.com/file/d/1zW0SMCPMBiwYAn78qOmEhcoYyhAuqmfL/view?usp=drive_link">Download my resume</a>
            </button>
        </div> 
           <div className='w-1/5'>  
                 <img className='img-fluid. max-width: 100%; rounded-full' src={avtarImg} alt="" /> 
           </div>
        {/* </div> */}
    </div>
     
  )
};

export default Home