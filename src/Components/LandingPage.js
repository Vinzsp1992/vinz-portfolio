import {useState, useEffect} from 'react'
import ProfilePic from '../assets/profilepic.jpg';



const LandingPage = () => {
  
  return (
    <div id="homepage" className=" bg-no-repeat bg-cover
     flex justify-evenly lg:flex backdrop-blur-sm w-[auto]">
        <main className='mt-16 mx-5 w-[100%] lg:w-100%'>
          <div className='w-[100%] flex justify-center lg:justify-center px-2'>
           
              <h1 className='lg:text-4xl  text-2xl mt-5 text-white font-bold text-center'>IT | Web Developer</h1>
            </div>
            <h1 className='text-sm lg:text-lg mt-2 text-gray-300 text-center block'>
              Transforming dreams into immersive digital experiences</h1>

            <div className=' lg:flex block lg:justify-center lg:gap-5 lg:w-full lg:h-full mt-10 mb-10 mx-1'>
                <div className='bg-slate-200  bg-opacity-10 rounded-tr-full rounded-tl-full
                rounded-br-full rounded-bl-full w-[auto] p-2 lg:h-[500px] h-[100%] mb-5 rounded-xl '>
                <img src={ProfilePic} className='w-[100%] h-[300px] rounded-full
                 shadow-xl pb-2 lg:w-full lg:h-[480px] md:w-[auto] px-5'/>
                </div>
            <div className='bg-slate-200 bg-opacity-10 rounded-br-full rounded-tl-full
            rounded-tr-3xl w-[auto] p-2 h-[100%] lg:h-[500px] shadow-xl
            pb-10 lg:w-[50%] lg:p-5'>
                <h1 className='text-white font-semibold text-2xl mt-5 mx-5 italic font-mono'>Hello, I'am </h1>
                <h1 className='text-slate-200 text-2xl lg:text-4xl mb-4 mx-5 font-bold
                animate-typing overflow-hidden whitespace-nowrap italic font-mono'>Vincent San Pedro</h1>
                <div className='mx-5'>
                <h2 className='text-slate-100 italic'>Welcome to my portfolio, i am aspiring web developer passionate about translating creative visions into seamless digital experiences.<br/><br/>
                I wanted to share with you my portfolio, which reflects my dedication to the world of web development and showcases the skills and projects I've been working on.<br/><br/>
                
                I would love the opportunity to discuss how my skills and enthusiasm for web development align with your team's needs.
                </h2>
                <br/>
                <div className='animate-pulse'>
                <a href="VinceSP_CV.pdf" target="_blank"
                className='p-1 mt-5 h-[45px] lg:h-[35px] md:h-[35px] text-center px-2 py-2 rounded-md text-white font-semibold
               hover:text-black hover:bg-yellow-200 transition ease-in-out delay-150
                text-xs w-[100px]  bg-yellow-300' download>
                 DOWNLOAD CV</a>
                 </div>
                </div>
            </div>
                
            </div>
            
        </main>
        
    </div>
  )
}

export default LandingPage