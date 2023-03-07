import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ tags, style }) => {
    return (
        <div className={`flex-row flex-wrap w-full pt-2 `+ style}>
        {
        tags?.length > 0
        &&
        tags.map(tag => (
            <Link key={tag.id} to={"/tag/id="+tag.id}><p className={`text-white shadow rounded-sm hover:shadow-md p-1 bg-primary mx-2 px-3 text-xs hover:bg-red-700 transition-all mb-2`} >{tag.name.toUpperCase()}</p></Link>
        ))
        }
        </div>
    )
}

export default Tags