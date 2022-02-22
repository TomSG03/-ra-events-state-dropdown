import React from 'react'

function ProjectList({filter}) {
  return (
    <div className='gallery'>
      {filter.map((e, index) => <div  key={index} className='galery-img'> <img src={e.img} alt={e.category} /> </div>)}      
    </div>
  )
}

export default ProjectList