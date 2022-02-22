import React from 'react'

function DropdownItem({ item, onClick, selected }) {
  return <li onClick={onClick} className={selected === item.id ? 'active' : ''}><a href="#/" data-id={item.id}>{item.value}</a></li>
}

export default DropdownItem