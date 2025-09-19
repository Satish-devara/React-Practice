import { useEffect } from "react"
import { useContext } from "react";
import DataContext from "./context/DataContext";

import {useParams, Link} from 'react-router-dom'

function Edit(){
    const { id } = useParams();
    const {posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit} = useContext(DataContext);
    const post = posts.find(post => Number(post.id) === Number(id));

    useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post,setEditBody,setEditTitle])
    return(
        <main className="NewPost">
            {editTitle &&
             <>
                <h2>EditPost</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title</label>
                <input 
                type="text"
                value={editTitle}
                required
                id="postTitle"
                onChange={(e) => setEditTitle(e.target.value)}
                 />
                 <label htmlFor="postBody">Edit Body: </label>
                 <textarea  id="postBody"
                 required
                 value={editBody}
                 onChange={(e) => setEditBody(e.target.value)}></textarea>
                 <button type="submit"
                    onClick={() => handleEdit(post.id)}
                 >Post</button>
            </form>
            </>
            }{
                !editTitle && 
                <>
                <h2>Post not found</h2>
                <Link to='/'><p >Home page</p></Link>
                </>
            }
           
        </main>
    )
}

export default Edit