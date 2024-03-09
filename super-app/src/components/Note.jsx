import React from 'react'

const Note = () => {
  return (
    <div className='note-container'>
        <div className='note-title roboto-700'>All notes</div>
        <textarea className='note-textarea roboto-400'>This is how I am going to learn MERN Stack in next 3 months.</textarea>
    </div>
  )
}

export default Note