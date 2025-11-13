import { createContext, useState, useEffect } from "react";
import useWindowSize from '../hooks/useWindowSize';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import api from '../API/post';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [posts, setPosts] = useState([]);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxios('http://DEVARAs-MacBook-Air.local:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = posts.filter((post) => (post.body).toLowerCase().includes(search.toLowerCase())
            || post.title.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults([...filteredResults].reverse());
    }, [search, posts])


    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postLists = posts.filter((post) => post.id !== id);
            setPosts(postLists);
            navigate('/');
        } catch (err) {
            console.log(err.message)
        }

    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const upatedPost = {
            id,
            title: editTitle,
            datetime,
            body: editBody
        }
        try {
            const response = await api.put(`/posts/${id}`, upatedPost);
            setPosts(posts.map((post) => post.id === id.toString() ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');

        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = (posts.length ? Number(posts[posts.length - 1].id) + 1 : 1).toString();
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {
            id,
            title: postTitle,
            datetime,
            body: postBody
        }
        try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }

    }


    return (
        <DataContext.Provider value={{
            posts,
            width,
            search,
            editBody,
            postBody,
            editTitle,
            postTitle,
            isLoading,
            fetchError,
            searchResults,
            setSearch,
            handleEdit,
            setEditBody,
            setPostBody,
            setPostTitle,
            setEditTitle,
            handleSubmit,
            handleDelete

        }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataContext;