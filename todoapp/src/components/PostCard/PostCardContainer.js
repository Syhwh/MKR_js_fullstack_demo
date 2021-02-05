import React from 'react'

import { PostCardView } from './PostCardView';

export const PostCardContainer = ({ posts }) => {

  const handleEdit = () => {
    console.log('Edit')
  }

  const handleDelete = () => {
    console.log('Delete')
  }
  const handleVotar = (id) => {
    console.log('VOTAR', id)
  }
  return (<>
    {
      posts.map((post) => (
        <PostCardView
          key={post.id}
          post={post}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleVotar={handleVotar}
        />))
    }
  </>
  )
}
