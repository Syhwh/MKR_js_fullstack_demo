import React from 'react'
import { Button } from '../Button/Button'
import { useHistory, useParams, useLocation } from 'react-router-dom'


export const About = () => {

  const history = useHistory()
  const handleBack = () => {
    console.log(history)
    history.goBack()
  }

  const handleForward = () => {
    history.push('/posts')
  }

  return (
    <div>
      ESTO ES ABOUT
      <h1>KKKKK</h1>
      <Button name='Back' handleClick={handleBack} />
      <Button name='Ir a posts' handleClick={handleForward} buttonStyle='success' />

    </div>
  )
}
