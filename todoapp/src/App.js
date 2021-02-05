import React, { useState } from 'react';
import './App.css';

import { CreatePostContainer } from './components/CreatePost/CreatePostContainer';
import { PostCardContainer } from './components/PostCard/PostCardContainer';

import { posts as initialState } from './utils/postsDb';

function App() {
  // General state
  const [posts, setPosts] = useState(initialState);

  const updatePostsState = (post) => {
    setPosts([{ id: posts.length + 1, ...post }, ...posts])
  }


  // OJO no hay que borrar el post, UNO NUNCA MODIFICA EL ARREGLO
  // filter -> return todo menos el id

  return (
    <div className='container'>
      <div className='App' style={{ backgroundColor: 'red' }}>
        The Best Posts
      </div>
      <div className='row'>
        <div className='col-3 '>
          <CreatePostContainer updatePostsState={updatePostsState} />
        </div>
        <div className='col-9 mt2'>
          <PostCardContainer posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
// inline styled

/**
 const handleEdit=()=>{
   console.log('edit')
 }

 Un componente no debe manejar logica y vista

 *
 */