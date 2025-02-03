import React, { useState } from 'react'
import { use } from 'react';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios'



function login() {
const [hide,sethide]=useState(true)

const [email,setEmail] =useState("")
const [password,setPassword] =useState("")

  const handleHide =()=>{
    sethide(!hide)

  const handleSubmit =()=>{
      axios.post("local/login")
  }
  }
  return (
    <div className='border-1 w-[45%] h-100 mt-20'>
        <h1 className='font-bold'>Login to Your Account</h1>
        <div className='w-[90%] border-1 m-auto'>
            <label htmlFor="" className='block ml-10'>Email address</label>
            <input className='border rounded -md w-[80%] block m-auto'type="text" />

            <label htmlFor=""className='block ml-10'>Password</label>
            <div>
            <input onClick={handleSubmit} className='border rounded -md w-[80%] block m-auto' type={hide?"password":"text"} />
                {hide?<IoIosEye onClick={handleHide}/>:<IoIosEyeOff  onClick={handleHide}/>}
            </div>
            

            <div className='flex border-1 w-[80%] m-auto'>
                <input className='border rounded -md' type="checkbox" />
                <p>remember me</p>

                <h4>Forgot Your Password</h4>

            </div>
             <input  className='w-[80%] border-1 block m-auto mt-5 rounded-md bg-blue- 100'type="submit" value="submit"/>

             <h4>Not Have An Account ?</h4>
        </div>
    </div>
  )
}

export default login