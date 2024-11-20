import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'

const Header = () => {
   //for mobile device
    const [open, setOpen] = useState(false);
    
    //Changing color of background header when scrolling
    const [color, setColor] = useState(false);

    const changeColor = () =>{
      if(window.scrollY >= 90){
          setColor(true);
      }
      else{
        setColor(false);
      }
    }    
    window.addEventListener('scroll', changeColor);
  return (
    <div className='shadow-xl'>
        <header className={`p-5 flex items-center justify-between  fixed
        lg:justify-evenly w-[100vw] px-5 text-white h-[50px]
        z-10 bg-${color ? "black" : "none"}`}>
            <Link to='homepage'>
            <h1 className='cursor-pointer
            text-3xl font-bold '><span className='text-4xl hover:text-sky-600 text-sky-500'>
              <ion-icon name="person-circle" ></ion-icon></span></h1>
            </Link>
            
            <div onClick={()=> setOpen(!open)} className='lg:hidden md:hidden'>
                <ion-icon name={open ? 'close' : 'menu'} size="large"></ion-icon>
            </div>

            <ul className={`nav-menu active bg-black
             lg:bg-${color ? "black" : "none"}  lg:bg-opacity-0 w-[100%] md:w-auto
            text-white leading-10 text-center p-5 font-semibold
            absolute mt-20 md:flex md:flex-row md:items-center
             md:text-white md:static lg:h-full md:h-full md:mt-0
            md:gap-10 lg:gap-10 lg:flex -ml-5 transition-all duration-300 ease-in
             ${open ? 'top-[-31px]' : 'top-[-500px]'} text-sm  cursor-pointer  `}>
                <li className='nav-item'>
                  <Link to='homepage' spy={true} smooth={true} offset={-100}
                duration={500} className='hover:text-sky-600 hover:text-sm
                 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 duration-300
                 cursor-pointer'>HOME</Link></li>

                <li className='nav-item'><Link to='projects' spy={true} smooth={true} offset={-60}
                duration={500} className='hover:text-sky-600  hover:text-sm 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>PROJECTS</Link></li>

                <li className='nav-item'><Link to="about" spy={true} smooth={true} offset={-60}
                duration={500} className='hover:text-sky-600 hover:text-sm 
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>ABOUT</Link></li>

              
                <li className='nav-item '><Link to="contact" spy={true} smooth={true} offset={-30}
                duration={500} className='hover:text-sky-600 hover:text-sm 
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>CONTACT</Link></li>


            <a href="tel: +639217490083"
             className='bg-sky-500 px-2 flex lg:block
             justify-center  py-1 rounded-md text-xs font-mono space-x-[-1px]
            hover:bg-sky-400 font-bold  hover:text-black transition ease-in-out delay-150
             text-slate-50 border border-slate-400 border-b-1  lg:overflow-hidden lg:relative hover:brightness-150 hover:border-t-1 hover:border-b active:opacity-75 outline-none duration-300 group '>
              <span className="bg-slate-500 hidden lg:inline-flex shadow-slate-400 absolute -top-[150%] left-0  w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              <div className=' lg:flex lg:items-center lg:gap-2 flex items-center gap-2
              justify-center'>
              Contact Me!
              <ion-icon name="call"></ion-icon>
               </div>
            </a>
            </ul>
           
        </header>

    </div>
  )
}

export default Header