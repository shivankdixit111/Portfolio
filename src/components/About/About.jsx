import React from 'react' 
import avtarImg from '../../assets/7358653-removebg-preview.png'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from  '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AboutImg from '../../assets/AboutImg.png.png'

const About = () => {
  return (
    <div id='About' className='text-white flex overflow:hidden items-center flex-wrap justify-center bg-black shadow-xl
    mx-5 md:mx-20 bg-opacity-30 rounded-lg p-4 mt-20'> 
    <div>
         <h2 className='text-4xl font-bold text-center mb-2 mb-4'>About</h2> 
        <div className='flex flex-wrap justify-evenly items-center xs:flex  xs:flex-row'>

                <img className='w-1/5 mx-2 rounded-full' src={AboutImg} alt="" />
                <div className='mx-10'>
                    <div className='flex gap-3 py-4'>
                    <FontAwesomeIcon size='2xl' icon={faArrowRight} />
                        <span className='w-96 lg:w-96 md:w-96 xs:w-72'>
                           <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                           <p className='text-sm md:text-md leading-tight'>Frontend developer with experience in building responsive, user-friendly web applications using modern technologies.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <FontAwesomeIcon size='2xl' icon={faArrowRight} />
                        <span className='w-96 lg:w-96 md:w-96 xs:w-72'>
                           <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                           <p className='text-sm md:text-md leading-tight'>Backend developer skilled in designing scalable, secure APIs and managing databases to support dynamic web applications</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <FontAwesomeIcon size='2xl' icon={faArrowRight} />
                        <span className='w-full lg:w-96 md:w-96 xs:w-72'>
                           <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Competitive Programmer</h1>
                           <p className='text-xs xs:text-sm md:text-md break-words  md:text-md leading-tight'>Competitive programmer with strong problem-solving skills, proficient in data structures, algorithms, and coding challenges on platforms like Codeforces and CodeChef.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About