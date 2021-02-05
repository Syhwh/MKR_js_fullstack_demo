import React from 'react'

// state puede ser un valor de tipo primitivo o objeto
// si el state es objeto o array se debe hacer destructuring...

// 1 otra manera state no se a un objeto
// 2 refactor componente no maneje logica

export const CreatePostView = ({ values, handleOnChange, handleOnSubmit }) => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>Title</label>
        <input
          name='title'
          type='text'
          className='form-control'
          value={values.title}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='content' className='form-label'>Content</label>
        <textarea
          name='content'
          placeholder='Once upon a time...'
          className='form-control'
          value={values.content}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button onClick={handleOnSubmit} type='submit' className='btn btn-primary'>Publish</button>
    </form>
  )
}
