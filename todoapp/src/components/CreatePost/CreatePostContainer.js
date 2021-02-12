import React, { useState, useEffect } from 'react'
import { CreatePostView } from './CreatePostView'

const initalState = { title: '', content: '' }

export const CreatePostContainer = ({ updatePost, createPost, postEdit }) => {

  // local state to handle input changes
  const [state, setState] = useState(initalState)
  const [editMode, setEditMode] = useState(false)
  const handleInputOnchange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  // handle submit form
  const handleOnClick = (event) => {
    event.preventDefault()
    if (postEdit) {
      updatePost(state)
    } else {
      createPost(state)
    }
    setState({ title: '', content: '' })
  }

  // ejecuta despues de que el componente se ha montado
  useEffect(() => {
    console.log('Renderiza useEffect del formulario')
    if (postEdit) {
      setState(postEdit)
      setEditMode(true)
    } else {

      setEditMode(false)
    }

  }, [postEdit])


  console.log('Renderiza formulario')

  return (
    <CreatePostView
      values={state}
      handleOnChange={handleInputOnchange}
      handleOnSubmit={handleOnClick}
      editMode={editMode} />
  )
}

// primera manera
/* const [state, setState] = useState({ title: '', content: '' })

 const handleTitleOnchange = (e) => {
   const { value } = e.target
   setState({ ...state, title: value })
 }

 const handleContentOnchange = (e) => {
   const { value } = e.target
   setState({ ...state, content: value })
 }

 const handleOnClick = (event) => {
   event.preventDefault()
   posts.push({ id: posts.length + 1, ...state })
   setState({ title: '', content: '' })
 }
*/
  // segunda manera

/*
 const [titulo, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleOnchange = (e) => {
    const { value } = e.target
    setTitle(value)
  }
  const handleContentOnchange = (e) => {
    const { value } = e.target
    setContent(value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    posts.push({ id: posts.length + 1, title: titulo, content })
    setTitle('')
    setContent('')
    console.log('POSTS', posts)
  }
  */