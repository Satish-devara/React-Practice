import {useParams, Link} from 'react-router-dom'

import { useContext } from "react";
import DataContext from "./context/DataContext";


function PostPage(){
    const { id } = useParams();
     const {posts, handleDelete}  = useContext(DataContext);

    const post = posts.find(post => (post.id).toString() === id);
    return(
        <main className='PostPage'>
            <article className='post'>
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                        
                    </>
                }
                {!post && 
                    <>
                    <h2>post Not Found</h2>
                    <p>Well, if you want to go home click below</p>
                    <Link to='/'>Home</Link>
                    </>
                }
            </article>
            
        </main>
    )
}

export default PostPage