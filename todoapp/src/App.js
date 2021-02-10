import React, { useState, } from 'react';
import './App.css';

import { CreatePostContainer } from './components/CreatePost/CreatePostContainer';
import { PostCardContainer } from './components/PostCard/PostCardContainer';

import { posts as initialState } from './utils/postsDb';

function App() {
  // General state
  const [posts, setPosts] = useState(initialState);

  // edit post state
  const [postEdit, setPostEdit] = useState(null);

  const createPost = (post) => {
    setPosts([{ id: Date.now(), ...post }, ...posts])
  }

  const deletePost = (postId) => {
    const newState = posts.filter((post) => post.id !== postId)
    setPosts(newState)
  }


  const updatePost = (postEdited) => {
    console.log('Edited post', postEdited)
    const newEditedPosts = posts.map((post) => post.id === postEdited.id ? postEdited : post)
    setPosts(newEditedPosts)
  }


  return (
    <div className='container'>
      <div className='App' style={{ backgroundColor: 'red' }}>
        The Best Posts
      </div>
      <div className='row'>
        <div className='col-3 '>
          <CreatePostContainer createPost={createPost} updatePost={updatePost} postEdit={postEdit} />
        </div>
        <div className='col-9 mt2'>
          <PostCardContainer posts={posts} deletePost={deletePost} editPost={setPostEdit} />
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