import React from 'react'

function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className='tolbar'>
      {filters.map((e, index) => {
        return (
          <button key={index} className={e === selected ? 'filter-button-selected' : ''} onClick={onSelectFilter}>{e}</button>
        )
      })}
    </div>
  )
}

export default Toolbar