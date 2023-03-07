import React, { useState } from 'react'
import { AUTHEN_SWITCH } from '../../data/constants'
import Login from './Login'
import Register from './Register'

const AuthenView = () => {
    
    
    const [authenSwitch, setAuthenSwitch] = useState(window.localStorage.getItem(AUTHEN_SWITCH) ?? true)

    return (
        <div className='w-full h-full absolute p-5 top-0 left-0 bg-black bg-opacity-40 flex flex-col justify-center'>
            <div className='authen-view-wrapper m-auto w-full md:w-1/2 max-w-lg h-fit p-2 rounded  bg-white px-2 md:px-5 lg:px-10 xl:px-20'>
                <div className='w-full flex flex-row mb-5'>
                    <p onClick={()=>setAuthenSwitch(true)} className={`p-2 rounded w-1/2 font-bold cursor-default text-center transition-all ${!authenSwitch && 'cursor-pointer shadow-md bg-primary text-white'}`}>
                        Login
                    </p>
                    <p onClick={()=>setAuthenSwitch(false)} className={`p-2 rounded w-1/2 font-bold cursor-default text-center transition-all ${authenSwitch && 'cursor-pointer shadow-md bg-primary text-white'}`}>
                        Register
                    </p>
                </div>
                <div className=''>
                    {
                        authenSwitch
                            ?
                            <Login />
                            :
                            <Register />
                    }
                </div>

            </div>
        </div>
    )
}

export default AuthenView