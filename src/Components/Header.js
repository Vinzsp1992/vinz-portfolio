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
        <header className={`flex items-center justify-between fixed
        lg:justify-evenly w-[100%] px-5 text-white h-[68px]
        z-10 bg-${color ? "slate-950" : "none"}`}>
            <Link to='homepage'>
            <h1 className='cursor-pointer
            text-3xl font-bold italic '><span className='text-4xl hover:text-yellow-200 text-yellow-300'>
              <ion-icon name="person-circle" ></ion-icon></span></h1>
            </Link>
            
            <div onClick={()=> setOpen(!open)} className='lg:hidden md:hidden'>
                <ion-icon name={open ? 'close' : 'menu'} size="large"></ion-icon>
            </div>

            <ul className={`nav-menu active bg-slate-950
             lg:bg-${color ? "slate-950" : "none"}  lg:bg-opacity-0 w-[100%] md:w-auto
            text-white leading-10 text-center p-5 font-semibold
            absolute mt-20 md:flex md:flex-row md:items-center
             md:text-white md:static lg:h-full md:h-full md:mt-0
            md:gap-10 lg:gap-10 lg:flex -ml-5 transition-all duration-300 ease-in
             ${open ? 'top-[-12px]' : 'top-[-500px]'} text-sm  cursor-pointer  `}>
                <li className='nav-item'><Link to='homepage' spy={true} smooth={true} offset={-100}
                duration={500} className='hover:text-yellow-300 hover:text-lg hover:underline
                 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                 cursor-pointer'>HOME</Link></li>

                <li className='nav-item'><Link to='projects' spy={true} smooth={true} offset={-60}
                duration={500} className='hover:text-yellow-300  hover:text-lg hover:underline 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>PROJECTS</Link></li>

                <li className='nav-item'><Link to="about" spy={true} smooth={true} offset={-60}
                duration={500} className='hover:text-yellow-300 hover:text-lg hover:underline
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>ABOUT</Link></li>

              
                <li className='nav-item'><Link to="contact" spy={true} smooth={true} offset={-30}
                duration={500} className='hover:text-yellow-300 hover:text-lg hover:underline
                transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300
                cursor-pointer'>CONTACT</Link></li>


            <a href="tel: +639217490083" className='bg-yellow-300 px-2 p-1 py-2 rounded-md w-auto text-sm
            hover:bg-yellow-300 font-bold  hover:text-black transition ease-in-out delay-150 '>
               CONTACT ME  &nbsp; <ion-icon name="call-outline" size="small"></ion-icon>
            </a>
            </ul>
           
        </header>

    </div>
  )
}

export default Header