import React from 'react'

export const Button = ({ name, buttonStyle, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm btn-outline-${buttonStyle}`}
    >
      {name}
    </button>
  )
}
