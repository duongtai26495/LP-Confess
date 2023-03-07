import React, { useRef, useState } from 'react'
import { ACCESS_TOKEN, LOGIN_STATE, LOGIN_VIEW, REFRESH_TOKEN, TOKEN_ACTIVE } from '../../data/constants'
import { getDataUser, loginWup } from '../../data/account_function'
import CustomButton from '../common/CustomButton'
import CancelAuthenViewButton from './CancelAuthenViewButton'
import { useStore } from '../../store'
import { updateLoginView, updateLoginState } from '../../store/actions'

const Login = () => {


    const [state, dispatch] = useStore()


    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const passwordRef = useRef()
    const loginBtn = useRef()

    const login = async () => {
        if (username === '' || password === '' || username.length < 3 || password.length < 6) {

        }
        else {
            setLoading(true)
            var user = {
                username,
                password
            }

            const result = await loginWup(user)
            if (result.status == 200) {
                let data = result.data
                window.localStorage.setItem(LOGIN_STATE, true)
                window.localStorage.setItem(TOKEN_ACTIVE, true)
                window.localStorage.setItem(ACCESS_TOKEN, data.access_token)
                window.localStorage.setItem(REFRESH_TOKEN, data.refresh_token)
                await getDataUser(username)
                dispatch(updateLoginView(false))
                dispatch(updateLoginState(true))
                window.localStorage.removeItem(LOGIN_VIEW)
                setLoading(false)
            }

        }

    }


    return (
        <React.Fragment>
            <div className='w-full flex flex-col my-1'>
                <label htmlFor='username_login my-3'><p className='text-sm text-secondary italic'>Username</p></label>
                <input id='username_login' type={'text'} value={username} className="p-2 rounded-sm border" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className='w-full flex flex-col my-3'>
                <label htmlFor='password_login my-1' ><p className='text-sm text-secondary italic'>Password</p></label>
                <input id='password_login' type={'password'} value={password} className="p-2 rounded-sm border" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <CustomButton
                onClick={login}
                style={'bg-primary text-white rounded-md mt-7 p-2 text-center font-bold hover:shadow-lg transition-all rounded'}
                title="Go"
                isLoading={isLoading}
            />
            <CancelAuthenViewButton />
            <p className='my-3 italic hover:text-red-500 text-black transition-all w-fit cursor-pointer'>Forgot password?</p>

        </React.Fragment>
    )
}

export default Login