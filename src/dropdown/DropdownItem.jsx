import React from 'react'

function DropdownItem({ item, handler, selected }) {
  return <li onClick={handler} className={selected === item.id ? 'active' : ''}><a href="#/" data-id={item.id}>{item.value}</a></li>
}

export default DropdownItem