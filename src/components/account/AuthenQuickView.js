import React from 'react'
import { LOGIN_VIEW } from '../../data/constants'
import { useStore } from '../../store'
import { updateLoginView } from '../../store/actions'

const AuthenQuickView = () => {
    
  const [state, dispatch] = useStore()

    const openAuthenView = () => {
        window.localStorage.setItem(LOGIN_VIEW, true)
        dispatch(updateLoginView(true))
    }

  return (
    <div className='w-full flex flex-col p-2'>
        <p className='text-md text-center'>You do not login</p>
        <p onClick={()=> openAuthenView()} className='cursor-pointer text-center text-primary'>Join now</p>
    </div>
  )
}

export default AuthenQuickView