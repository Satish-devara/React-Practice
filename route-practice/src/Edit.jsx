import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from './context/DataContext';
const Edit = () => {
    const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => post.id.toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle])
    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="editTitle">Title:</label>
                        <input type="text"
                            id="editTitle"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} />
                        <label htmlFor="editBody">Post:</label>
                        <textarea id="editBody" required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)} cols="30"></textarea>
                        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }

            {!post &&
                <>
                    <h2>Post not found</h2>
                    <p>Well, this is disappointing</p>
                    <p>
                        <Link to='/'>Go to home page</Link>
                    </p>
                </>


            }
        </main>
    )
}

export default Edit