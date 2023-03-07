import axios from "axios"

import { ACCESS_TOKEN, TOKEN_ACTIVE, LOGIN_STATE, USER_LOGIN } from './constants'
import { HOST } from "./constants"


const saveNewArticle = async (article) => {
  let url = HOST + "diary/save"
  let token = window.localStorage.getItem(ACCESS_TOKEN)

  let config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: article
  };


  return await axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    });
}

const uploadNewImage = async (data) => {

  let url = HOST + "user/upload_image"
  let token = window.localStorage.getItem(ACCESS_TOKEN)


  var config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Authorization': 'Bearer ' + token,
    },
    data
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
}
const addNewTag = async (data) => {
  let url = HOST + "user/category/new"
  let token = window.localStorage.getItem(ACCESS_TOKEN)


  var config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url,
    headers: {
      'Authorization': 'Bearer '+token,
      'Content-Type': 'application/json'
    },
    data
  };

 return await axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });

}
export { saveNewArticle, uploadNewImage, addNewTag }