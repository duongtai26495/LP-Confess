import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'

const Profile = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useStore()
  const {login_state} = state

  useEffect(()=>{
    !login_state && navigate("/")
  },[login_state])

  return (
    <div>Profile</div>
  )
}

export default Profile