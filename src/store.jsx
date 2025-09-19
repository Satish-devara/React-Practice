import {createStore, action, thunk, computed} from 'easy-peasy;
import api from './api/posts';
import { PiPlayLight } from 'react-icons/pi';

export default createStore({
    posts:[],
    setPosts: action((state, payload => {
        state.posts = payload;
    })),
    postTitle: '',
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    postCount: computed((state) => 
        state.posts.length
    ),
    getPostById: computed((state) => {
        return state.posts.find(post => Number(post.id) === Number(id));
    }),
    savePost: thunk(async (useActionState, NewPost, helpers) => {
        const {posts} = helpers.getState();
        
    })
})