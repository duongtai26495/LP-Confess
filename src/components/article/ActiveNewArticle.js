import React, { useEffect, useState } from 'react'
import { SET_DISPLAY_NEW_ARTICLE } from '../../data/constants'

const ActiveNewArticle = () => {
  
    const [display, setDisplay] = useState(Number(window.localStorage.getItem(SET_DISPLAY_NEW_ARTICLE)) ?? 0)

    useEffect(()=>{
        window.localStorage.setItem(SET_DISPLAY_NEW_ARTICLE, display)
    },[display])


  return (
    <div className='w-full flex flex-col p-2 border rounded-md bg-white mb-3'>
        <div className='flex flex-col'>
        <p className='mb-3'>Select active article</p>
        <button onClick={()=>setDisplay(1)} className={`w-full text-start p-2 rounded border my-1 ${display == 1 ? 'bg-primary text-white' : 'bg-white'}`}>Display</button>
        <button onClick={()=>setDisplay(0)} className={`w-full text-start p-2 rounded border my-1 ${display == 0 ? 'bg-primary text-white' : 'bg-white'}`}>Draft</button>
      </div>
    </div>
  )
}

export default ActiveNewArticle