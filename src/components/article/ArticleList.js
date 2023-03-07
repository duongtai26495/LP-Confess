import React from 'react'
import Empty from '../common/Empty'
import ArticleCard from './ArticleCard'

const ArticleList = ({articles}) => {

  return (
    articles?.length > 0
    ?
    articles.map(item => (
        <ArticleCard key={item.id} article={item} />
    ))
    :
    <Empty type={"article"} />
  )
}

export default ArticleList