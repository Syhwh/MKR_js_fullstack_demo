import React from 'react'
import { Button } from '../Button/Button'

export const PostCardView = ({ post, handleDelete, handleEdit, handleVotar }) => {
  return (
    <>
      <div className="card" >
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
          <p className="card-text">{post.content}</p>
          <Button name={'Edit'} buttonStyle={'info'} handleClick={() => handleEdit(post)} />
          <Button name={'Delete'} buttonStyle={'danger'} handleClick={() => handleDelete(post.id)} />
          <Button name={'Votar'} buttonStyle={'primary'} handleClick={() => handleVotar(post.id)} />
        </div>
      </div>
    </>
  )
}

