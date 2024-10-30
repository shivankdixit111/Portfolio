import React from 'react'
import ProjectCard from './ProjectCard'; 

import simonImg from '../../assets/555px-Simon_Electronic_Game.jpg' 
import musicSchoolImg from '../../assets/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg'
import rentImg from '../../assets/daria-nepriakhina-nwMxSzGFB68-unsplash.jpg' 


const Projects = () => {
  return (
    <div id='Projects' className='flex flex-col items-center justify-evenly p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-14 flex flex-wrap gap-5'>
            <ProjectCard title='Rent Ease' 
              main='Developed a full-stack booking app with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, enabling secure CRUD operations and efficient server-side logic.'
              url = {rentImg} 
              demo = 'https://rentease-3.onrender.com/listings'
              srcCode = 'https://github.com/shivankdixit111/RentEase'
            />
            <ProjectCard title='Music School' 
              main='Built an interactive music learning platform using Acertenity UI, Next.js, and TypeScript, offering an intuitive and responsive user experience.' 
              url = {musicSchoolImg}
              demo = 'https://shivankdixit111.github.io/music_school/'
              srcCode = 'https://music-school-drauz7byw-shivank-dixits-projects.vercel.app/'
            />
           <ProjectCard title='Simon Game' 
              main='Developed an interactive Simon Game using HTML, CSS, JavaScript, and Bootstrap, focusing on user engagement and responsive design' 
              url = {simonImg}
              demo = {'https://shivankdixit111.github.io/Simongame/'}
              srcCode = {'https://github.com/shivankdixit111/Simongame'}
           />
        </div>
    </div>
  )
}

export default Projects