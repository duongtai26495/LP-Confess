import axios from "axios"
import { ACCESS_TOKEN, TOKEN_ACTIVE, LOGIN_STATE, USER_LOGIN, REFRESH_TOKEN, HOST, USER_DATA } from './constants'

const signout = () => {
    window.localStorage.removeItem(ACCESS_TOKEN)
    window.localStorage.removeItem(TOKEN_ACTIVE)
    window.localStorage.removeItem(LOGIN_STATE)
    window.localStorage.removeItem(USER_LOGIN)
    window.localStorage.removeItem(REFRESH_TOKEN)
    window.localStorage.removeItem(USER_DATA)

}


const loginWup = async (user) => {
    let url = HOST + "user/login"
    let data = new FormData()
    data.append('username', user.username)
    data.append('password', user.password)

    let config = {
        method: 'POST',
        url,
        data
    }
    return await axios(config, setTimeout(5000))
        .then(response => (
            response
        ))
        .catch(error => (
            console.log(error)
        ))
}

const getDataUser = async (username) => {
    let url = HOST + "user/profile/" + username
    let token = window.localStorage.getItem(ACCESS_TOKEN)

    let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

   return await axios(config)
        .then( (response) =>{
            
            let user_data = response.data.data
            let user = {
                "id": user_data.id,
                "full_name": user_data.full_name,
                "email": user_data.email,
                "username": user_data.username,
                "joined_at": user_data.joined_at,
                "gender": user_data.gender,
                "diaries_count": user_data.diaries_count,
                "profile_image": user_data.profile_image
            }
            window.localStorage.setItem(USER_DATA, JSON.stringify(user))
            return user_data
        })
        .catch(function (error) {
            console.log(error);
        });
}

const signupWuser = async (user) => {
    let url = HOST + "user/register"


    var config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: user
    };
    return await axios(config, setTimeout(5000))
        .then(response => (
            response
        ))
        .catch(error => (
            console.log(error)
        ))

}

function user() { return (window.localStorage.getItem(LOGIN_STATE) && window.localStorage.getItem(TOKEN_ACTIVE)) ? true : false }

const active_user = async (code) => {
    let url = HOST + "user/active/" + code

    var config = {
        method: 'GET',
        url
    };

    return await axios(config)
        .then(response => (
            response
        ))
        .catch(error => (
            console.log(error)
        ))
}

const regenetateAccessToken = async () => {
    let url = HOST + "user/refresh_token"
    let refresh_token = window.localStorage.getItem(REFRESH_TOKEN)
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url,
        headers: {
            'Authorization': 'Bearer ' + refresh_token
        }
    };

    return await axios(config)
        .then(function (response) {
            if (response.status == 200) {
                let data = response.data
                window.localStorage.setItem(ACCESS_TOKEN, data.access_token)
                window.localStorage.setItem(REFRESH_TOKEN, data.refresh_token)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export { loginWup, signout, signupWuser, user, active_user, regenetateAccessToken, getDataUser }