import React from 'react'
import CommentRow from './CommentRow'
import Empty from '../common/Empty'
const Comments = ({ comments, style }) => {
    return (
        <div className='w-full p-2 bg-secondary text-white my-5'>
            {
                comments?.length > 0 ?
                    comments.map(comment => (
                        <CommentRow key={comment.id} comment={comment} />
                    ))
                    :
                    <Empty type="comment" />}
        </div>

    )
}

export default Comments