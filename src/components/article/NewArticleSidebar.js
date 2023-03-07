import React from 'react'
import ActiveNewArticle from './ActiveNewArticle'
import CategoriesNewArticle from './CategoriesNewArticle'
import FirebaseImageNewArticle from './FirebaseImageNewArticle'
import ImageNewArticle from './ImageNewArticle'

const NewArticleSidebar = () => {

    

    return (
        <div className='w-full flex flex-col'>
            <ActiveNewArticle />
            <CategoriesNewArticle />
            <FirebaseImageNewArticle />
        </div>
    )
}

export default NewArticleSidebar