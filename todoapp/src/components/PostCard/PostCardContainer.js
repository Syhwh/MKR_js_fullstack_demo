import React from 'react'

import { posts } from '../../utils/postsDb';
import { PostCardView } from './PostCardView';

export const PostCardContainer = () => {

  const handleEdit = () => {
    console.log('Edit')
  }

  const handleDelete = () => {
    console.log('Delete')
  }
  const handleVotar = () => {
    console.log('VOTAR')
  }
  return (<>
    {posts.map((post) => (
      <PostCardView
        key={post.id}
        post={post}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleVotar={handleVotar}
      />))}
  </>
  )
}
