import { useContext } from "react";
import DataContext from "./context/DataContext";
function NewPost(){

const {postTitle, postBody, handleSubmit, setPostTitle, setPostBody} = useContext(DataContext);
 
    return(
        <main className="NewPost">
            <h2>NewPost</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title</label>
                <input 
                type="text"
                value={postTitle}
                required
                id="postTitle"
                onChange={(e) => setPostTitle(e.target.value)}
                 />
                 <label htmlFor="postBody">Post Body: </label>
                 <textarea  id="postBody"
                 required
                 value={postBody}
                 onChange={(e) => setPostBody(e.target.value)}></textarea>
                 <button type="submit"

                 >Post</button>
            </form>
        </main>
    )
}

export default NewPost