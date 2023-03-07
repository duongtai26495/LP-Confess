import React, { useEffect, useRef, useState } from 'react'

import default_image from '../../assets/images/default_feature.jpg'
import { NEW_FEATURE_IMAGE } from '../../data/constants'
import { storage} from '../../config/firebase'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from 'uuid'
import CustomButton from '../common/CustomButton'

const FirebaseImageNewArticle = () => {
    const input_ref = useRef()
    const [image, setImage] = useState(default_image)
    const [uploadStatus, setUploadStatus] = useState("")

    useEffect(() => {
        
        saveLocalImage(image)

        return (() => {
            image && URL.revokeObjectURL(image.preview)
        })
    }, [image])

    const saveLocalImage = async ( f_image ) => {
        if(image == default_image){

        }else{
            setUploadStatus("Uploading...")
            const image_name = v4()
            const imageRef = ref(storage,`article/images/${image_name}`)
           await uploadBytes(imageRef, f_image)
           await getDownloadURL(ref(storage,`article/images/${image_name}`))
            .then((url)=>{
                window.localStorage.setItem(NEW_FEATURE_IMAGE, url)
                setUploadStatus("Image upload successfully")
            })
        }
        
    }

    return (
        <div className='w-full rounded border mt-3 p-2'>
            <p className='w-full py-2'>Feature Image</p>
            <div className='w-full relative'>
            <img className='w-full my-1 rounded-md' src={image.preview ?? default_image} />
            {uploadStatus != "" &&
            <p className='absolute p-2 text-white bg-black bg-opacity-30 bottom-0 left-0 w-full text-center'>{uploadStatus}</p>
            }
            
            </div>
            <CustomButton style="w-full bg-primary text-white border rounded-md p-2 text-center" title={image.preview ? "Change Image" : "Select Image"} onClick={() => input_ref.current.click()} />
            <input
                onChange={(e) => {
                    let file = e.target.files[0]
                    file.preview = URL.createObjectURL(file)
                    setImage(file)
                }} ref={input_ref} type={'file'} id="feature_image" className='hidden' />
        </div>
    )
}

export default FirebaseImageNewArticle