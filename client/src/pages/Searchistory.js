import React from 'react'

const Searchistory = ({searchHistory}) => {
  return (
    <div className='searcharea-histroy'>

     {searchHistory.length > 0 && (
     <div>
          {searchHistory.map((search,index) => (
         
            <p key={index}>{index}.{search}</p> 
          ))}
        </div>
      )} </div>
  )
}

export default Searchistory