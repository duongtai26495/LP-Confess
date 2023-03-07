import React, { useState } from 'react'
import { addNewTag } from '../../data/article_function'
import { CATEGORIES } from '../../data/constants'
import { getPublicDataAPI } from '../../data/public_functions'
import { useStore } from '../../store'
import { getAllTags } from '../../store/actions'

const CreateNewTag = () => {
    const [state, dispatch] = useStore()
    const [tag, setTag] = useState("")

    const saveNewTag = async () => {
        let new_tag = {
            name:tag,
            display:1
        }
        const result = await addNewTag(new_tag)
        if(result.status == 200){
            setTag("")
            const new_tags = await getPublicDataAPI(CATEGORIES)
            if (new_tags.status == 200) {
                window.localStorage.setItem(CATEGORIES, JSON.stringify(new_tags.data))
                dispatch(getAllTags(new_tags.data))
            }
        }
    }


  return (
    <div className='w-full mt-5 m-1  bg-white cursor-pointer transition-all text-center flex flex-row gap-2'>
    <input onChange={(e)=>setTag(e.target.value)} value={tag} className='w-full p-2 border rounded' placeholder='Add new tag' />
    <button onClick={()=>saveNewTag()} className='w-fit px-5 bg-primary shadow hover:shadow-lg text-white rounded'>Save</button>
    </div>
  )
}

export default CreateNewTag