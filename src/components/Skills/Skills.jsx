import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa"; 
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

import codechef from '../../assets/icons8-codechef-100.png'
import gfgImg from '../../assets/icons8-geeksforgeeks-144.png'
import codeforcesImg from '../../assets/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-96.png'

const Skills = () => {
  return (
    <div id="Skills" className="p-10 sm:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#F7DF1E" size={50} />
          </span>

          <span className=" hover:scale-105 p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
        <div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center hover:scale-105">
            <a href="https://www.geeksforgeeks.org/user/dshivank//">
                <img src={gfgImg} alt='' />
            </a>
            <span className="text-white ">
              <h2 className="leading-tight">4 &#11088; @GeeksForGeeks</h2> 
              <h2 className="mt-1">(max Rating 1824)</h2>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105">
            <a href="https://www.codechef.com/users/dshivank">
               <img className='bg-white' src={codechef} alt="" />
            </a>
            <span className="text-white">
              <h2 className="leading-tight"> 3 &#11088; @Codechef</h2> 
              <h2 className="mt-1">(max Rating 1650)</h2>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center hover:scale-105">
            <a href="https://codeforces.com/profile/shivank_dixit">
                <img src={codeforcesImg} alt="" />
            </a>
            <span className="text-white">
              <h2 className="leading-tight"> Pupil @Codeforces</h2> 
              <h2 className="mt-1">(max Rating 1332)</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
