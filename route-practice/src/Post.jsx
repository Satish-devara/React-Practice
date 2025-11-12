import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post'>
        <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        </Link>
        <p className='postBody'>
            {
                (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`
            }
            {!post && 
            <>
            <h2>post not found</h2>
            <p>
                <Link to='/'> Visit out homepage </Link>
            </p>
            </>}
        </p>
    </article>
  )
}

export default Post