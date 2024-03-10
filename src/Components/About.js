import React from 'react'
import Skills from './Skills.js';

const About = () => {
  return (
    <div id="about" className='h-auto  bg-slate-100 p-2 bg-opacity-90  text-wrap lg:flex
    lg:justify-center'>
        <div className='bg-slate-50 text-gray-700 lg:w-[75%] m-2 rounded-md pt-2'>
            <h1 className='text-3xl font-bold py-3 pl-2 text-center lg:text-left
            border border-b-2 border-gray-300 border-t-0 border-x-0 mx-6
             '><ion-icon name="information-circle-outline" size="large"></ion-icon>ABOUT<span className='text-3xl text-yellow-400'> ME</span></h1>
            <h2 className='p-2  mx-5 text-gray-600 font-semibold text-lg'>I'm Vincent San Pedro, a recent graduate from Nueva Ecija University of Science and Technology with a passion for web development.</h2>
            <h2 className='p-2 mx-5 text-gray-600 font-semibold text-lg'>I recently earned my degree, and my journey now takes me into the exciting world of web development.<br/> I am enthusiastic about crafting dynamic and user-friendly web experiences that leave a positive impact.</h2>
            <div className='m-6'>
              <h1 className='text-2xl text-center lg:text-left font-bold border border-b-2 border-gray-300
              border-t-0 border-x-0'><ion-icon name="school"></ion-icon> ACADEMIC
              <span className='text-yellow-400'> BACKGROUND</span></h1>
              <h2 className='text-xl font-semibold mt-2 ml-5 text-sky-700'>College</h2>
              <ul className='text-md leading-9 font-semibold list-disc ml-5 
              border border-b-2 border-gray-300
              border-t-0 border-x-0'>
                <li>2013-2017</li>
                <li>BS Information Technology Major in Web Application Programming</li>
                <li className=''>Nueva Ecija University of Science and Technology</li>
              </ul>

              <h2 className='text-xl font-semibold mt-2 ml-5 text-sky-700'>Highschool</h2>
              <ul className='text-md leading-9 font-semibold list-disc ml-5 
              border border-b-2 border-gray-300
              border-t-0 border-x-0'>
                <li>2006-2008</li>
                <li className=''>Camarin Highschool Caloocan</li>
              </ul>

              <h2 className='text-xl font-semibold mt-2 text-sky-700 ml-5'>Elementary</h2>
              <ul className='text-md leading-9 font-semibold list-disc ml-5 
              border border-b-2 border-gray-300
              border-t-0 border-x-0'>
                <li>2000-2006</li>
                <li>East Bagong Barrio Elementary school</li>
              </ul>
            </div>
            <Skills />
        </div>
       
        

    </div>
  )
}

export default About
