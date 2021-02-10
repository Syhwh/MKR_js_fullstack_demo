import React from 'react'

import { PostCardView } from './PostCardView';

export const PostCardContainer = ({ posts, deletePost, editPost }) => {

  const handleEdit = (post) => {
    console.log('Edit')
    editPost(post) //-> setEditPost
  }

  const handleDelete = (id) => {
    console.log('Delete', id)
    deletePost(id)
  }
  const handleVotar = (id) => {
    console.log('VOTAR', id)
  }
  console.log('Render PostCardContainer ')
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
