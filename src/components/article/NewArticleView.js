import React, { useState } from 'react'
import { saveNewArticle } from '../../data/article_function'
import { NEW_ART_VIEW, NEW_FEATURE_IMAGE, SELECTED_CATEGORIES, SET_CURRENT_ARTICLE, SET_DISPLAY_NEW_ARTICLE } from '../../data/constants'
import { useStore } from '../../store'
import { setNewArticleView } from '../../store/actions'
import CustomButton from '../common/CustomButton'
import NewArticleSidebar from './NewArticleSidebar'

const NewArticleView = () => {
    const [state, dispatch] = useStore()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isLoading, setLoading] = useState(false)

    const cancel_new_art = () => {
        dispatch(setNewArticleView(false))
        window.localStorage.removeItem(NEW_ART_VIEW)
    }

    const article_save = async () => {
        setLoading(true)
        let display = Number(window.localStorage.getItem(SET_DISPLAY_NEW_ARTICLE))
        let categories = JSON.parse(window.localStorage.getItem(SELECTED_CATEGORIES))
        let image_url = window.localStorage.getItem(NEW_FEATURE_IMAGE)

        if (categories.length > 0 && title !== "" && content !== "") {
            let article = {
                title,
                content,
                categories,
                display,
                image_url
            }
            console.log(article)
            const result = await saveNewArticle(article)
            return result
        }
    }

    const submit_article = async () => {
        const result = await article_save()
        if (result.status == 200) {
            window.localStorage.removeItem(NEW_FEATURE_IMAGE)
            window.localStorage.removeItem(SELECTED_CATEGORIES)
            cancel_new_art()
        }

        setLoading(false)
    }

    return (
        <React.Fragment>
            <div className='absolute top-0 left-0 w-full h-full z-50 bg-black bg-opacity-40'>

            </div>
            <div className='new-art-innter overflow-auto absolute w-full lg:w-1/2 h-auto left-0 lg:left-1/4 top-10 lg:top-3.5 bg-white p-2 rounded border shadow flex flex-col md:flex-row gap-3 justify-between'>
                <div className='w-full lg:w-3/5 py-2'>
                    <div className='rounded-md bg-slate-100 p-5'>
                        <p className='text-base text-black font-bold -mt-2 mb-2'>New confession</p>
                        <div className='flex flex-col mt-3'>
                            <label className='p-1 text-sm' htmlFor='a_title'>Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-2 border rounded' placeholder='How do you feel today?' />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='p-1 text-sm' htmlFor='a_content'>Content</label>
                            <textarea aria-multiline rows={10} onChange={(e) => setContent(e.target.value)} defaultValue={content} placeholder={"What do you thinking?"} className="p-2 mb-5">

                            </textarea>
                        </div>
                        <CustomButton
                            style={"w-fit text-center font-bold p-2 rounded bg-primary text-white"}
                            title={"Save"}
                            isLoading={isLoading}
                            onClick={() => { submit_article() }} />
                        <CustomButton
                            style={"w-fit text-center font-bold p-2 mt-2 rounded bg-secondary text-white"}
                            title={"Cancel"}
                            onClick={() => { cancel_new_art() }} />
                    </div>

                </div>
                <div className='py-2 w-full md:w-2/5 lg:w-2/5 ml-0 md:ml-3'>
                    <NewArticleSidebar />
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewArticleView