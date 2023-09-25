"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { sendEmail } from './sendEmail'
import { POST } from '@/app/api/send/route'
import Image from 'next/image'

const ContactForm = ({className}) => {

  const [data, setData] = useState({name:"", email:"", message:""});
  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value})
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    POST(data)
    //console.log(data);
  }
  return (
    <motion.form 
    initial={{y:30, opacity:0 }} 
    whileInView={{y:0, opacity: 1 }} 
    transition={{duration: 0.5}} 
    method='post' onSubmit={handleSubmitForm}
    className={`flex flex-col gap-y-2 w-[80%] ${className}`}>
      <div className='flex flex-row gap-x-2'>
      <input className='inputFields w-full' type="text" value={data.name} name='name' onChange={handleFormChange} id='name_id' placeholder='Tu nombre aqui...' />
      <input className='inputFields w-full' type="email" value={data.email} name='email' onChange={handleFormChange} id='email_id' placeholder='Tu email aqui...'/>

      </div>
      <input type="hidden" id='honeypot' onChange={handleFormChange} />
      <textarea className='inputFields' name="message" value={data.message} onChange={handleFormChange} id="message_id" cols="30" rows="10" placeholder='Tu mensaje aqui...'/>
      <motion.div
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.7}} 
      >
            <motion.button 
            whileHover={{y:-4 }}
            whileTap={{ y:1 }} 
            transition={{duration: 0.09}}
            className="cursor-pointer [border:none] px-10 py-5  sm:px-5 bg-black  items-start justify-center"
            type='submit'
            >
            <div className="self-stretch relative ">
              
              <h4 className="m-0  top-[14.5px] left-[25px] text-[24px] sm:text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                Solicitar consulta
              </h4>
              <Image
                className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                width={30} height={30}
                alt=""
                src="/arrow-5.png"
              />
            </div>
          </motion.button>

      </motion.div>
    </motion.form>
  )
}

export default ContactForm