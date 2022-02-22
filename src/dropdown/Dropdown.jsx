import React, { useState } from 'react'
import DropdownList from './DropdownList'

function Dropdown() {
  const [open, setOpen] = useState('')

  function toggleOpen() {
    setOpen(open === 'open' ? '' : 'open')
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={`dropdown-wrapper ${open}`}>
        <button data-id="toggle" className="btn" onClick={toggleOpen}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList handlerBtn={toggleOpen} />
      </div>
    </div>
  )
}

export default Dropdown