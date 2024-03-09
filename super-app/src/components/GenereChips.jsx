import React from 'react'

const GenereChips = ({data,color,selected,setSelected,isClose,classData}) => {
 const handleClose = () =>{
    const updatedSelected = selected.filter((item) => item !== data);
    setSelected(updatedSelected);
  }
  return (
    <div className={`genere-chips roboto-400 ${classData}`} style={{backgroundColor:color}}>{data} <span className="remove-chips" style={{visibility:!isClose&&"hidden"}} onClick={handleClose}>X</span></div>
  )
}

export default GenereChips