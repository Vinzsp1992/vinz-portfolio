import React from 'react'
import Tailwind from '../assets/tailwind.png';
import Php from '../assets/php.png';

const Skills = () => {
  return (
    <div className=' rounded-lg'>
       
        
    <div className='lg:flex   lg:flex-wrap lg:gap-1 bg-opacity-90 lg:justify-center
    bg-slate-100 lg:flex-col '>
        

        <div className='p-5 pt-1 space-x-5 bg-slate-50    rounded-lg  mb-2 h-auto w-auto'>
            
        <h1 className='text-3xl font-mono font-bold p-2 pt-10 text-center lg:text-left
        border border-b-2 border-gray-300 border-t-0 border-x-0'> <ion-icon name="hammer-outline" size="large">
            </ion-icon>SKILLS & <span className='text-3xl text-yellow-400 '> TOOLS 
        </span></h1>
            <div className='mt-10 text-center flex flex-wrap justify-evenly
            gap-3 space-x-5 lg:flex lg:justify-center lg:gap-6'>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-4  shadow-lg'>
           <a  className='text-red-500   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-html5" size="large"></ion-icon>
            </a>
            <span className='text-sm font-semibold text-red-500'>HTML5</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-6  shadow-lg'>
           <a  className='text-blue-500   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-css3" size="large"></ion-icon>
            </a>
            <span className='text-sm font-semibold text-blue-500'>CSS3</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-4  shadow-lg'>
           <a  className='text-yellow-300   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-javascript" size="large"></ion-icon>
            </a>
            <span className='text-xs font-semibold text-yellow-300'>JAVASCRIPT</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-6  shadow-lg'>
           <a  className='text-pink-400   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-sass" size="large"></ion-icon>
            </a>
            <span className='text-sass font-semibold text-pink-500'>SASS</span>
            </div>

            </div>

            <div className='mt-10 text-center flex flex-wrap justify-center
            gap-3 space-x-5 lg:flex lg:justify-center lg:gap-6'>
                

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-6  shadow-lg'>
           <a  className='text-sky-400   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-react" size="large"></ion-icon>
            </a>
            <span className='text-sm font-semibold text-sky-500'>REACT</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-4  shadow-lg'>
             <img src={Tailwind} className='ml-2 w-[40px] h-[30px]'/>
            <span className='text-xs font-semibold text-sky-300 mt-1'>TAILWIND</span>
            </div>
                    
                   
            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-4  shadow-lg'>
             <img src={Php} className=' w-[35px] h-[30px]'/>
            <span className='text-sm font-semibold text-sky-400 mt-1'>PHP</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-6  shadow-lg'>
           <a  className='text-green-400   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-nodejs" size="large"></ion-icon>
            </a>
            <span className='text-sm font-semibold text-green-400'>NODE</span>
            </div>

            <div className='flex flex-col justify-center pt-2
            hover:-translate-y-1 hover:scale-105  duration-200
            transition ease-in-out delay-150 cursor-pointer bg-slate-100 rounded-lg
            px-6  shadow-lg'>
           <a  className='text-slate-900   hover:shadow-2xl
           rounded-xl   '>
            <ion-icon name="logo-github" size="large"></ion-icon>
            </a>
            <span className='text-sm font-semibold text-slate-900'>GITHUB</span>
            </div>
            </div>
            </div>
        </div>

       

    </div>
    
  )
}

export default Skills