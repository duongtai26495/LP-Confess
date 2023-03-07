import React, { useEffect, useState } from 'react'
import default_avt from '../../assets/images/default_avatar.jpg'
import { signout } from '../../data/account_function'
import { HOST, USER_DATA } from '../../data/constants'
import { useStore } from '../../store'
import { updateLoginState } from '../../store/actions'

const AccountQuickView = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem(USER_DATA)))
    const [state, dispatch] = useStore()

    const avatar = currentUser.profile_image ? HOST + "image/profile/"+ currentUser.profile_image : default_avt
    const signoutHandle = () => {
        dispatch(updateLoginState(false))
        signout()
    }

  return (
    <div className='w-full h-full p-2 flex flex-col justify-center items-center'>
        <img src={avatar} className="w-20 h-20 rounded-full object-cover" />
        <p className='w-full mt-2 text-xl font-bold text-center'>{currentUser.full_name}</p>
        <p className='italic text-sm m-auto'>{currentUser.email}</p>
        <p onClick={()=>signoutHandle()} className='w-full bg-primary hover:shadow-md text-white rounded p-2 text-center my-2'>Log out</p>
    </div>
  )
}

export default AccountQuickView