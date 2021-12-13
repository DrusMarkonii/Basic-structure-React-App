import React, {useState} from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
// import React, { useRef } from 'react'


import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', content: 'Description'},
      {id: 2, title: 'JavaScript', content: 'Description'},
      {id: 3, title: 'JavaScript', content: 'Description'}
    ]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
        id: Date.now(),
        title,
        content
      }
      
      setPosts([...posts, newPost])
    }
    
  return (
    <div className='App'>
      <form>
        <MyInput
            type="text" 
            placeholder="Post name"
            value={title}
            onChange = {e => setTitle(e.target.value)}
        />
        <MyInput 
            type="text" 
            value={content}
            onChange = {e => setContent(e.target.value)}
            placeholder="Post description"
        />
       
        <MyButton onClick = {addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JavaScript'/>
    </div>
  );
}

export default App;
