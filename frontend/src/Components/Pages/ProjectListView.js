import React from 'react';
import '../../App.css';
import List from '../List/List'
import '../List/List.css'

export default function ProjectListView() {
  
  let projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className="project-list-view">
      <List items={projects}/>
    </div>
  );

}
