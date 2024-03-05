import React from 'react'

const GenereChips = ({data,selected,setSelected}) => {
 const handleClose = () =>{
    console.log(selected);
    const updatedSelected = selected.filter((item) => item !== data);
    setSelected(updatedSelected);
  }
  return (
    <div className='genere-chips roboto-400'>{data} <span className="remove-chips" onClick={handleClose}>X</span></div>
  )
}

export default GenereChips