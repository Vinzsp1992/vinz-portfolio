import React from 'react'
import AgeCalculator from '../assets/age-calculator.png';
import MultiStep from '../assets/multi-step.png';
import Ecommerce from '../assets/e-commerce.png';
import Dashboard from '../assets/dashboard.png';
import NewsLetter from '../assets/news-letter.png';
import Ebank from '../assets/ebank.png';
import News from '../assets/news.png';
const Projects = () => {
  return (
    <div id="projects" className='bg-slate-100  '>
        
        <h1 className='lg:text-left text-center text-gray-700  border border-b-2
        border-x-0 border-gray-300 mx-5 text-3xl font-bold pt-10 pb-2'>
            <ion-icon name="book-outline" size="large"></ion-icon> PROJECT<span className='text-3xl
            text-yellow-400'>S</span></h1>

       <div className=' pb-20 pt-10 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center gap-5 space-y-2 mx-7 '>
        
        <div className='p-2 flex justify-center flex-wrap flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl '>
            
            <img src={AgeCalculator} className='w-[290px] h-[200px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 rounded-xl  duration-300' />
            <h1 className=' text-lg text-gray-600 font-semibold'>Responsive Age Calculator</h1>
            <a href="https://kamnida1992.github.io/age-calculator/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-blue-400'>REACT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div className='p-2 flex justify-center  flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl'>
       
           
            <img src={Ecommerce} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
              <h1 className=' text-lg text-gray-600 font-semibold'>Responsive E-commerce Landing Page</h1>
            <a href="https://ecommerceweb-e06a.onrender.com/" target="_blank" 
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-red-400'>HTML</h1>
            <h1 className='text-blue-900'>JAVASCRIPT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl'>
        
            
            <img src={MultiStep} className='w-[290px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className=' text-lg text-gray-600 font-semibold'> Multi Step Form</h1>
            <a href="https://kamnida1992.github.io/multi-step-form/#/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2 
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-sky-400'>REACT</h1>
            <h1 className='text-blue-900'>TYPESCRIPT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
            
            </div>
        </div>

        <div className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0 
        shadow-xl'>
        
            <img src={NewsLetter} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className=' text-lg text-gray-600 font-semibold'>Responsive News Letter</h1>
             <a href="https://kamnida1992.github.io/news-letter-main/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px] py-2
            hover:bg-slate-700'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-red-400'>HTML</h1>
            <h1 className='text-blue-900'>JAVASCRIPT</h1>
            <h1 className="text-blue-500">TAILWIND</h1>
           
            </div>
        </div>

        <div className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5 lg:mx-0
        shadow-xl'>
        
            
            <img src={Ebank} className='w-[300px] h-[200px] 
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
        <div className='p-2 flex justify-center flex-col bg-slate-200 gap-5 rounded-lg mx-5
        shadow-xl lg:mx-0'>
        
            
            <img src={News} className='w-[300px] h-[200px] 
            transition ease-in-out delay-150 rounded-xl bg-blue-500 hover:-translate-y-1
             hover:scale-105  duration-300' />
             <h1 className='text-lg text-gray-600 font-semibold'>Responsive News Landing Page</h1>
            <a href="https://kamnida1992.github.io/news.github.io/" target="_blank"
            className='bg-slate-900 text-white px-2 rounded-md w-[130px]
            hover:bg-slate-700 py-2'>View live demo</a>
            <div className='flex gap-2 font-semibold'>
            <h1 className='text-red-400'>HTML</h1>
            <h1 className='text-blue-900'>CSS</h1>
            <h1 className="text-pink-500">SASS</h1>
            
            
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default Projects
