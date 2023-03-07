import React, { useEffect, useRef, useState } from 'react'
import default_image from '../../assets/images/default_feature.jpg'
import { uploadNewImage } from '../../data/article_function'
import { FEATURE_IMAGE_NEW_ARTICLE, NEW_FEATURE_IMAGE } from '../../data/constants'
import CustomButton from '../common/CustomButton'
const ImageNewArticle = () => {
    const input_ref = useRef()
    const [image, setImage] = useState(default_image)


    useEffect(() => {
        
        saveLocalImage(image)

        return (() => {
            image && URL.revokeObjectURL(image.preview)
        })
    }, [image])

    const saveLocalImage = async ( f_image ) => {
        if(image == default_image){

        }else{
            var data = new FormData();
            data.append("image",f_image)
            const result = await uploadNewImage(data)
            window.localStorage.setItem(NEW_FEATURE_IMAGE, result.data)
        }
        
    }

    return (
        <div className='w-full rounded border mt-3 p-2'>
            <p className='w-full py-2'>Feature Image</p>
            <img className='w-full my-1 rounded-md' src={image.preview ?? default_image} />
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

export default ImageNewArticle