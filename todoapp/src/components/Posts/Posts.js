import React, { useState, useEffect } from 'react';


import { CreatePostContainer } from '../CreatePost/CreatePostContainer';
import { PostCardContainer } from '../PostCard/PostCardContainer';

import { posts as initialState } from '../../utils/postsDb';

const localPosts = JSON.parse(localStorage.getItem('namePosts'))




export const Posts = () => {
  // General state
  const [posts, setPosts] = useState(localPosts || initialState);

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
    setPostEdit(null)
  }
  // Local storage example
  useEffect(() => {
    console.log('Ejecuta Use Effect DEL PADRE')
    localStorage.setItem('namePosts', JSON.stringify(posts))
  }, [posts]);
  console.log('Renderiza EL componente Principal o Padre')


  // save  localStorage.setItem('Name', 'pepe')
  // obtener  const data = localStorage.getItem('Name')
  // delete  localStorage.removeItem('Name')

  return (
    <div className='container'>
      <div className='App' style={{ backgroundColor: 'red' }}>
        The Best Posts
      </div>
      <div className='row mt4'>
        <div className='col-3 '>
          <CreatePostContainer createPost={createPost} updatePost={updatePost} postEdit={postEdit} />
        </div>
        <div className='col-8 mt2'>
          <PostCardContainer posts={posts} deletePost={deletePost} editPost={setPostEdit} />
        </div>
      </div>
    </div>
  );
}

// inline styled

/**
 const handleEdit=()=>{
   console.log('edit')
 }

 Un componente no debe manejar logica y vista

 *
 */