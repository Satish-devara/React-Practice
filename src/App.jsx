import Header from './Header'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Footer from './Footer'
import About from './About'
import Missing from './Missing'
import Home from './Home'
import {Route, Routes } from 'react-router-dom'
import Edit from './Edit'
import { DataProvider } from './context/DataContext'
function App() {

 

  return (
        <div className='App'>
          <DataProvider>
              <Header title="React-JS-Blog"/>
                <Nav /> 
                  <Routes>
                    <Route path="/" element = {<Home  />}/>
                    <Route path= "/about" element = {<About />}/>
                    <Route path= "/newPost" element = {<NewPost />}/>
                    <Route path= "/post/:id" element = {<PostPage  />}/>
                    <Route path= "/edit/:id" element = {<Edit />}/>
                    <Route path= "*" element = {<Missing />}/>
                  </Routes> 
              <Footer />
          </DataProvider>
        </div>
  )
}

export default App
