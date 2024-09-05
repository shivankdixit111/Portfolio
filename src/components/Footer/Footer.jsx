import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faLinkedin, faGithub} from  '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div id='Footer' className='text-white bg-[#465697] p-10 md:p-12 items-center justify-around flex'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-md md:text-2xl font-normal'>
                Feel free to reach out!
            </h3>
        </div>
        <ul >
            <li className='flex gap-3 items-center mt-4'> 
                <a href='https://www.linkedin.com/in/shivank-dixit-43170024a/'>
                   <FontAwesomeIcon size='2xl'    icon={faLinkedin}/> 
                   &nbsp;&nbsp;
                   linkedin.com/in/shivank-dixit-43170024a
                </a>
            </li>
            <li className='flex gap-3 items-center mt-4'>
                <a href="https://github.com/shivankdixit111">
                  <FontAwesomeIcon size='2xl'  icon={faGithub}/> &nbsp;&nbsp;
                   github.com/shivankdixit111
                </a>
            </li>
            <li className='flex gap-3 items-center mt-4'>
                <a href="dshivank630@gmail.com">
                <FontAwesomeIcon size='2xl' icon={faEnvelope} />
                &nbsp;&nbsp;
                dshivank630@gmail.com
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer