import { useState } from 'react'

export const ProjectSelectorListItem = ({ 
  project, 
  optionalProp1,
  optionalProp2 }) => {

  const { name } = project;
  
  const handleClick = () => {
    optionalProp2(name);
    optionalProp1(name);
    console.log(name + " has been clicked");
  }

  
  return (
    <div className="project-name">
      <h1 onClick={handleClick} className="project-h1">{name}</h1>
    </div>
  ); 
}; 
