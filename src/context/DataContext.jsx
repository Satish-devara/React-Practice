import { createContext, useState, useEffect } from "react";
import {useNavigate } from 'react-router-dom'
import api from '../api/posts';
import useWindowSize from '../hooks/useWindowsSize'
import useAxiosFetch  from '../hooks/useAxiosFetch';
const DataContext = createContext({});

export const DataProvider = ({ children}) => 
{

    const [posts, setPost] = useState([]);
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate()


    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    const { width } = useWindowSize();
    const {data, fetchError, isLoading} = useAxiosFetch('http://DEVARAs-MacBook-Air.local:3500/posts')

      useEffect(() => {
        setPost(data);
      },[data]);

    useEffect(() => {
  const filteredResults = posts.filter(post => 
    post.body.toLowerCase().includes(search.toLowerCase()) ||
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  setSearchResult(filteredResults.reverse());
}, [posts, search]);

const handleDelete = async (id) => {

      try{
       await api.delete(`/posts/${id}`);
        const postList = posts.filter(post => post.id != id);
      setPost(postList);
      navigate('/');
      }catch(err){
        console.log(err.message);
      }
      
     }

     const handleEdit = (id) => {
  const updatedPosts = posts.map(post => 
    post.id === Number(id) ? { ...post, title: editTitle, body: editBody } : post
  );
  setPost(updatedPosts);
  navigate(`/post/${id}`);
};

    const handleSubmit  = async (e) =>{
        e.preventDefault();
        const id = posts.length ? Number(posts[posts.length - 1].id)+1 : 1;
        const date = new Date().toLocaleString();
        const newPost = {id, title: postTitle, datetime: date,body: postBody };
        try{
          const response = await api.post('/posts', newPost);
        const allposts = [...posts, response.data];
        setPost(allposts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
        }catch(err){
          console.log(`${err.message}`);
        }
        
     }


    return(
        <DataContext.Provider value={{
            width, search, setSearch, 
            searchResults, fetchError, isLoading,
            postTitle , postBody, handleSubmit ,setPostTitle,setPostBody,
            posts, handleDelete,editTitle, editBody,handleEdit,setEditTitle,setEditBody
        }}>

            {children}
            </DataContext.Provider>
    )
}


export default DataContext