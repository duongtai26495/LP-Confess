import React from 'react'
import { NEW_ART_VIEW } from '../../data/constants'
import { useStore } from '../../store'
import { setNewArticleView } from '../../store/actions'

const AddNewArticleButton = () => {
    const [state, dispatch] = useStore()
    const {new_art_view} = state


    const add_article_handle = () => {
        dispatch(setNewArticleView(true))
        window.localStorage.setItem(NEW_ART_VIEW, true)

    }

    return (
        <div onClick={() => add_article_handle()} className='sticky bottom-5 float-right right-5 cursor-pointer z-50'>
            <svg
                className="add_btn" 
                height="50px"
                width="50px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 292.377 292.377"
                xmlSpace="preserve">
                <g>
                    <path style={{ fill: '#439A97' }} d="M146.188,0C65.576,0,0,65.582,0,146.188s65.576,146.188,146.188,146.188
                    s146.188-65.582,146.188-146.188S226.801,0,146.188,0z M194.962,152.155h-42.806v42.8c0,3.3-2.667,5.967-5.967,5.967
                    c-3.3,0-5.967-2.667-5.967-5.967v-42.8H97.415c-3.294,0-5.967-2.673-5.967-5.967s2.673-5.967,5.967-5.967h42.806V97.415
                    c0-3.294,2.667-5.967,5.967-5.967c3.3,0,5.967,2.673,5.967,5.967v42.806h42.806c3.3,0,5.967,2.673,5.967,5.967
                    S198.261,152.155,194.962,152.155z"/>
                </g>
            </svg>
        </div>

    )
}

export default AddNewArticleButton