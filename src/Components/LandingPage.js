import React from 'react'
import ProfilePic from '../assets/profilepic.jpg';


const LandingPage = () => {
  return (
    <div id="homepage" className=" bg-no-repeat bg-cover
     flex justify-evenly lg:flex">
        <main className='mt-16 mx-5 w-[100%] lg:w-max'>
          <div className='w-[100%] flex justify-center lg:justify-center px-2 '>
            <h1 className=' text-xl font-bold lg:text-5xl mt-10 text-slate-200 text-center block
            animate-typing overflow-hidden whitespace-nowrap'>IT Professional | Web Developer</h1>
            </div>
            <h1 className='text-sm lg:text-lg mt-2 text-gray-300 text-center block'>
              Transforming dreams into immersive digital experiences</h1>

            <div className=' lg:flex block lg:justify-center w-[auto] lg:gap-5 lg:w-full lg:h-full mt-10 mb-10 mx-1'>
                <div className='bg-slate-200 bg-opacity-90 p-2 lg:h-[500px] h-[100%] mb-5 rounded-xl'>
                <img src={ProfilePic} className='w-[100%] h-[300px] rounded-3xl
                shadow-2xl pb-2 lg:w-full lg:h-[480px] md:w-[auto] px-5'/>
                </div>
            <div className='bg-slate-200 bg-opacity-10 rounded-xl p-2 h-[100%] lg:h-[500px] shadow-xl lg:w-[500px] lg:p-5'>
                <h1 className='text-white font-semibold text-2xl mt-5 mx-5'>Hello, I'am </h1>
                <h1 className='text-slate-200 text-4xl mb-4 mx-5 font-bold'>Vincent San Pedro</h1>
                <div className='mx-5'>
                <h2 className='text-slate-100'>Welcome to my portfolio, i am aspiring web developer passionate about translating creative visions into seamless digital experiences.<br/><br/>
                I wanted to share with you my portfolio, which reflects my dedication to the world of web development and showcases the skills and projects I've been working on.<br/><br/>
                
                I would love the opportunity to discuss how my skills and enthusiasm for web development align with your team's needs.
                </h2>
                <br/>
                <a href="VinceSP_CV.pdf" target="_blank"
                className='p-1 mt-5 h-[45px] lg:h-[35px] md:h-[35px] text-center px-2 py-2 rounded-md text-white font-semibold
               hover:text-black hover:bg-yellow-200 transition ease-in-out delay-150
                text-xs w-[100px]  bg-yellow-300' download>
                 DOWNLOAD CV</a>
                
                
                </div>
            </div>
                
            </div>
            
        </main>
        
    </div>
  )
}

export default LandingPage