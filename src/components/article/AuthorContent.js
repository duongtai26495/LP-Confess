import React from 'react'
import { HOST } from '../../data/constants'
import default_avatar from '../../assets/images/default_avatar.jpg'
const AuthorContent = ({author}) => {
    
    let avatar = author.profile_image ? HOST + "image/profile/" + author.profile_image : default_avatar
  return (
    <div className='mt-5 flex flex-row gap-3 items-center border w-full p-2'>
    <img src={avatar} className="w-16 h-16 rounded-full" />
    <div className='flex flex-col'>
    <p className='text-xl font-bold text-primary'>{author.full_name}</p>
    <p className='text-xs italic'>Join at: {author.joined_at}</p>
    </div>
    </div>
  )
}

export default AuthorContent