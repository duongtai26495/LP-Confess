import React, { useEffect, useState } from 'react'
import ArticleList from '../components/article/ArticleList'
import Tags from '../components/article/Tags'
import { CATEGORIES, DATA_LOCAL } from '../data/constants'
import { getPublicDataAPI } from '../data/public_functions'
import Loading from '../components/common/Loading'
import { useStore } from '../store'
import { getAllTags, loadNewDiaries } from '../store/actions'

const Home = () => {
    const [state, dispatch] = useStore()
    const {diaries_home, tags_list} = state

    const [articles, setArticles] = useState(diaries_home)
    const [tags, setTags] = useState(tags_list)
    const [isLoaded, setLoaded] = useState(false)
    
    useEffect(()=>{
        setArticles(diaries_home)
    },[diaries_home])

    useEffect(()=>{
        setTags(tags_list)
    },[tags])

    useEffect(() => {
        const getArticles = async () => {
            setLoaded(false)
            const result_articles = await getPublicDataAPI("")
            const result_categories = await getPublicDataAPI(CATEGORIES)
            if (result_articles.status == 200) {
                dispatch(loadNewDiaries(result_articles.data.content))
            }
            if (result_categories.status == 200) {
                window.localStorage.setItem(CATEGORIES, JSON.stringify(result_categories.data))
                dispatch(getAllTags(result_categories.data))
            }
            setLoaded(true)
        }

        getArticles()
    }, [])

    return (
        isLoaded
            ?
            <div className="loading_gif">
                <div className='bg-gray-200 rounded-sm mt-1'>
                    <Tags tags={tags} style={'flex overflow-auto'} />
                </div>
                <div className='w-full mt-2 gap-3 columns-2 md:columns-3 lg:columns-4 justify-start'>
                    <ArticleList articles={articles} />
                </div>
            </div>
            :
            <Loading />
    )
}

export default Home