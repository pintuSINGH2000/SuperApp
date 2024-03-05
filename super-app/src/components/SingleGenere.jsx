import React from "react";

const SingleGenere = ({data,selected,setSelected}) => {
  const isSelected = selected.includes(data.id)
  const handleSelect = () => {
    if(isSelected){
      const updatedSelected = selected.filter((item) => item !== data.id);
      setSelected(updatedSelected);
    }else{
      setSelected([...selected,data.id])
    }
   
  }
  return (
    <>
      <div className= "single-genere-container" style={{backgroundColor: data.color,border:isSelected&&"6px solid green"}} onClick={handleSelect}>
        <div className="dm-sans-500 genere-name" >{data.id}</div>
        <img src={data.img} className="genere-img" />
      </div>
    </>
  );
};

export default SingleGenere;
