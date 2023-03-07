import React, { useEffect, useState } from 'react'
import { getPublicDataAPI } from '../../data/public_functions'
import { useStore } from '../../store'
import { updateCurrentArticle } from '../../store/actions'
import Loading from '../common/Loading'
import AuthorContent from './AuthorContent'
import Comments from './Comments'
import Tags from './Tags'

const ArticleContent = () => {
    const [state, dispatch] = useStore()
    const { current_article } = state
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const article_id = current_article

    useEffect(() => {
        const getDiaryById = async () => {
            const result = await getPublicDataAPI("diary/id=" + article_id)
            if (result.status == 200) {
                const data = result.data 
                setArticle(data.diary)
                setComments(data.comments)
                setAuthor(data.diary.author)
            }
        }

        getDiaryById()
    }, [article_id])

    const removeArticle = () => {
        dispatch(updateCurrentArticle(null))
    }

    return (
        <React.Fragment>
            <div onClick={() => removeArticle()} className='absolute top-0 left-0 bg-black bg-opacity-30 w-full h-full z-50'>

            </div>
            {
                article != null
                ?
                <div className='article-content-inner absolute bg-white w-full lg:w-1/2 left-0 lg:left-1/4 h-full lg:h-fit top-0 lg:top-16 overflow-y-auto '>

                    <p onClick={() => removeArticle()} className='bg-black bg-opacity-50 p-2 cursor-pointer rounded-full absolute top-0 left-0 text-white text-center w-10 m-2 text-xl'>
                        X
                    </p>
                    <img src={article.image_url} className="w-full object-cover feature-image" />

                    <div className='p-3'>
                        <p className='text-2xl my-2 text-black font-semibold'>{article.title.toUpperCase()}</p>
                        <Tags style={'flex -ml-2'} tags={article.categories} />
                        <p className='text-base mt-2'>{article.content}</p>
                        <AuthorContent author={author} />
                        <Comments comments={article.comments} style={""} />
                    </div>
                </div>
                :
                <Loading />
            }

        </React.Fragment>
    )
}

export default ArticleContent