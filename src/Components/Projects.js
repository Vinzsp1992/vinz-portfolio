import React from 'react'
import AgeCalculator from '../assets/age-calculator.png';
import MultiStep from '../assets/multi-step.png';
import RestCountries from '../assets/Rest-Countries.png'
import NewsLetter from '../assets/news-letter.png';
import Ebank from '../assets/ebank.png';
import IPAddressTracker from '../assets/IPAddress-Tracker.png'
const Projects = () => {
  return (
    <div id="projects" className='bg-gradient-to-r from-slate-950 to-sky-950 w-[100vw]'>
        
        <h1 data-aos="flip-right" className='lg:text-left text-center text-gray-200
        border-x-0 lg:mx-40 text-3xl font-bold pt-10 pb-2'>
            <ion-icon name="book-outline" size="large"></ion-icon> PROJECT<span className='text-3xl
            text-sky-400'>S</span></h1>

       <div className=' pb-20 pt-10 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center gap-10
       gap-y-10 space-y-2 mx-7 '>
        
        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden' >

            <div 
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>
        
            
            <img
            href="https://vinzsp1992.github.io/age-calculator/" 
            src={AgeCalculator} className='w-[290px] h-[200px]
            cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 rounded-xl  duration-300' />
            <h1 className=' text-lg text-gray-600 font-semibold'>Responsive Age Calculator</h1>
            <a href="https://vinzsp1992.github.io/age-calculator/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-blue-400'>REACT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden'>
            
            <div
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>
        
           
            <img 
            href="https://vinzsp1992.github.io/rest-countries-api/"
             src={RestCountries} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
              <h1 className=' text-lg text-gray-600 font-semibold'>REST Countries API</h1>
            <a href="https://vinzsp1992.github.io/rest-countries-api/" target="_blank" 
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-blue-400'>TYPESCRIPT</h1>
            <h1 className='text-blue-900'>REACT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden '>

            <div
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>
        
            
            <img
             href="https://vinzsp1992.github.io/multi-step-form/#/"
             src={MultiStep} className='w-[290px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className=' text-lg text-gray-600 font-semibold'> Multi Step Form</h1>
            <a href="https://vinzsp1992.github.io/multi-step-form/#/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-sky-400'>REACT</h1>
            <h1 className='text-blue-900'>TYPESCRIPT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden'>

            <div
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>
        
            <img
            href="https://vinzsp1992.github.io/news-letter-main/"
             src={NewsLetter} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className=' text-lg text-gray-600 font-semibold'>Responsive News Letter</h1>
             <a href="https://vinzsp1992.github.io/news-letter-main/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-red-400'>HTML</h1>
            <h1 className='text-blue-900'>JAVASCRIPT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
           
            </div>
        </div>

        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden'>
        
            <div
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>


            <img
            href="https://easybank-react.onrender.com/" 
            src={Ebank} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className='text-lg text-gray-600 font-semibold'>Responsive Bank Landing Page</h1>
            <a href="https://easybank-react.onrender.com/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-blue-400'>REACT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>
        <div data-aos="flip-right" className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl div h-[auto] w-[auto] m-auto  relative group z-0 overflow-hidden'>
        

            <div
            className="z-[-2] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-red-600 via-yellow-200
            to-sky-200 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"
            ></div>
            
            <img src={IPAddressTracker} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className='text-lg text-gray-600 font-semibold'>IP Address Tracker</h1>
            <a href="https://vinzsp1992.github.io/ip-address-tracker/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px]
            hover:bg-slate-700 py-2'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-blue-400'>TYPESCRIPT</h1>
            <h1 className='text-blue-900'>REACT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default Projects
