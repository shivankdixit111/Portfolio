import React from 'react'
import ProjectCard from './ProjectCard'; 

import simonImg from '../../assets/555px-Simon_Electronic_Game.jpg' 
import spotifyImg from '../../assets/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg'
import rentImg from '../../assets/rio-lecatompessy-p77qNCTFEJQ-unsplash.jpg'

const Projects = () => {
  return (
    <div id='Projects' className='flex flex-col items-center justify-evenly p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-14 flex flex-wrap gap-5'>
            <ProjectCard title='Rent Ease' 
              main='Developed a full-stack accommodation booking web app using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Implemented server-side logic, routing, data validation, and security best practices for seamless CRUD operations.'
              url = {rentImg} 
              demo = 'https://rentease-3.onrender.com/listings'
              srcCode = 'https://github.com/shivankdixit111/RentEase'
            />
           <ProjectCard title='Simon Game' 
              main='Developed an interactive Simon Game using HTML, CSS, JavaScript, and Bootstrap, focusing on user engagement and responsive design' 
              url = {simonImg}
              demo = {'https://shivankdixit111.github.io/Simongame/'}
              srcCode = {'https://github.com/shivankdixit111/Simongame'}
           />
           
           <ProjectCard title='Spotify Clone' 
              main='Built a Spotify clone using HTML and CSS, replicating the core UI components and design for a seamless user experience.' 
              url = {spotifyImg}
              demo = 'https://shivankdixit111.github.io/Spotify_clone/'
              srcCode = 'https://github.com/shivankdixit111/Spotify_clone'
           />
        </div>
    </div>
  )
}

export default Projects