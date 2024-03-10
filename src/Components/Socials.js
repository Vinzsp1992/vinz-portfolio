import React from 'react'

const Socials = () => {
  return (
    <div className='space-x-2 flex justify-center lg:justify-start lg:ml-16 mb-5'>
        <a href="https://www.facebook.com/vsp1992" target="_blank"
         className='p-1 text-blue-500 hover:text-blue-400'><ion-icon name="logo-facebook" size="large"></ion-icon></a>
        <a href="https://github.com/kamnida1992/" target="_blank"
         className='p-1 text-slate-200 hover:text-white'><ion-icon name="logo-github" size="large"></ion-icon></a>
        <a href="https://www.linkedin.com/in/vincent-san-pedro-1bb762168/"
          target="_blank" className='p-1 text-blue-500 hover:text-blue-400'><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
        <a href="https://www.instagram.com/vinzenteu/" target="_blank"
         className='p-1 text-orange-500 hover:text-orange-400'>
          <ion-icon name="logo-instagram" size="large"></ion-icon></a>
        
   
    </div>
  )
}

export default Socials