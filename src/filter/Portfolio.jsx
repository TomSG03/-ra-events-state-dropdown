import React from 'react'
import { useState } from 'react';
import { projects } from './data';
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'

export default function Portfolio() {
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selected, setSelected] = useState('All');

  let filter = [];
  if (selected === 'All') {
    filter = [...projects]
  } else {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].category === selected) {
        filter.push(projects[i])
      }
    }
  }

  function onSelectFilter(props) {
    setSelected(props.target.textContent);
  }

  return (
    <div>
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList filter={filter} />
    </div>
  )
}
