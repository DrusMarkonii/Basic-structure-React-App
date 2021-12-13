import React, {useState} from 'react'
import PostList from './components/PostList'

import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', content: 'Description'},
      {id: 2, title: 'JavaScript', content: 'Description'},
      {id: 3, title: 'JavaScript', content: 'Description'}
    ]);

    const [posts2, setPosts2] = useState([
      {id: 1, title: 'Ruby', content: 'Description'},
      {id: 2, title: 'Ruby', content: 'Description'},
      {id: 3, title: 'Ruby', content: 'Description'}
    ]);
    

  return (
    <div className='App'>
      <PostList posts={posts} title='Posts about JavaScript'/>
      <PostList posts={posts2} title='Posts about Ruby'/>
     
    </div>
  );
}

export default App;
