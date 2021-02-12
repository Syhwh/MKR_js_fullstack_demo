import React from 'react'

export const Button = ({ name, buttonStyle = 'primary', handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm btn-outline-${buttonStyle}`}
    >
      {name}
    </button>
  )
}
