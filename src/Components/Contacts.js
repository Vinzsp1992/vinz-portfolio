import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Contactus from '../assets/contactus.jpg';
import Socials from './Socials.js';

const Contacts = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [success, setSuccess] = useState(false);
    const form = useRef();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError(false);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
        setError(false);
    }
    const handleName = (e) =>{
        setName(e.target.value);
        setError(false);
    }

  const submitForm = (e) => {
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validRegex.test(email) && message != "" && name != "" && email != "" ) {
        emailjs
      .sendForm('service_u5bbi1i', 'template_ko87lcg', form.current, {
        publicKey: 'eo8lJHP5NJJai_Sa1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        
      );
      setSuccess(true);
    }
    else{
        console.log("Invalid Entry");
        setError(true);
    }
   
  };

  return (
    <div id="contact" className='pb-10 h-[105vh] bg-slate-200 bg-no-repeat bg-cover pt-16'>
        <h1 className='text-center lg:text-left lg:ml-16 text-3xl font-bold text-slate-200 '>
        <ion-icon name="mail-outline"></ion-icon>CONTACT<span className='text-yellow-300'> US</span></h1>
        
        <Socials />
        <h1 className='lg:ml-16 text-slate-200 font-semibold text-2xl text-center
        lg:text-left '>Get in touch via email</h1>
        
        <div className='bg-slate-200 bg-opacity-10 m-5 p-5 pb-10 flex justify-evenly 
        gap-2 rounded-md'>
            
        <form ref={form} onSubmit={submitForm}>
            <div className='flex flex-col w-[80vw] lg:w-[40vw]'>
                <div className='flex flex-col mb-2'>
                    <label className={`font-semibold text-slate-200 italic`}>Your Name</label>
                    <input type="text" name="user_name" onChange={handleName}
                    className={`border border-${error ? "red-500" : "gray-600"} rounded-md`} />
                    {error && <p className='text-red-500 font-semibold italic
                    text-sm'>Name should not be blank.</p>}
                </div>
            <label className='font-semibold text-slate-200 italic'>Your Email</label>
            <input type="email" name="user_email" onChange={handleEmail}
             className={`rounded-md border border-${error ? "red-500" : "gray-600"}`}/>
             {error && <p className='text-red-500 font-semibold italic
                    text-sm'>E-mail should not be blank.</p>}
            <label className='font-semibold text-slate-200 italic'>Leave a message</label>
            <textarea className={`h-[150px] resize-none rounded-lg border-${error ? "red-500" : "gray-600"}`}
             name="message" onChange={handleMessage} />
             {error && <p className='text-red-500 font-semibold italic
                    text-sm'>Message should not be blank.</p>}
            {success && <p className='text-sm font-semibold text-green-400'>Message sent 
            <ion-icon name="checkmark-outline"></ion-icon></p>}
            <input className='bg-yellow-300 p-3 mt-2 hover:bg-yellow-200
            rounded-md text-slate-600 font-semibold cursor-pointer'
             type="submit" value="Send" />

            </div>
        </form>  
        
        <div className='lg:block hidden shadow-xl'>
            <img src={Contactus} className='rounded-lg'/>
        </div>
    </div>
    </div>
  )
}

export default Contacts
