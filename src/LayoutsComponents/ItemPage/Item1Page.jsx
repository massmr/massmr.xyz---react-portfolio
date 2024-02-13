//import packages
import { useState, useEffect } from 'react'

//import styles 
import './Item1Page.css'

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
library.add({ faChevronDown })

//import assets
import MDPortrait from '../../Utils/assets/img/FM20.jpg'

//import components
import { RegularList } from '../RegularList/RegularList.jsx'
import { ProjectSelectorListItem } from '../Projects/ProjectSelectorListItem.jsx'
import { ProjectCardListItem } from '../Projects/ProjectCardListItem.jsx'

//integrate db fetching
import { projects } from '../../Utils/projects.js'

//Components
//_____________________________________________________________

export const Item1PageContent = ({ name }) => {
   
  const [projectNameDisplayed, setProjectNameDisplayed] = useState(projects[0].name);

  const handleProjectDisplay = (projectName) => {
    setProjectNameDisplayed(projectName);
  }

  return (
    <div className="item-1-page">
      
      <ProjectSelector handleProjectDisplay={handleProjectDisplay} />
    
      <div className="item-1-spacer"></div>
    
      <ProjectCard projectNameDisplayed={projectNameDisplayed} />

    </div>
  );    
};

//_____________________________________________________________

const ProjectSelector = ({ handleProjectDisplay }) => {

  //deploy selector full size
  const [isSelectorFocus, setIsSelectorFocus] = useState(false);
  const handleSelectorToggle = () => {
    setIsSelectorFocus((prev) => !prev)
  }
  
  //project ordering logic :
  //this array will be sent to selector for display purpose
  const [orderedProjects, setOrderProjects] = useState(projects.map((e) => e));
  
  //create a new array for swapping only
  const moveElementToFront = (array, indexEl) => {
    const newArray = [...array];
    const removedEl = newArray.splice(indexEl, 1);

    newArray.unshift(...removedEl);

    return newArray;
  };
  
  //this is the index that will go 1st place
  const [forefrontIndex, setForeFrontIndex] = useState(0);
  //get the index of clicked project
  const handleSelectorProjectClick = (name) => {
    const index = projects.findIndex((project) => project.name === name)
    setForeFrontIndex(index);
    console.log(forefrontIndex);
  }
  //then, launch swapping and rerender selector
  useEffect(() => {
    //const newOrderedProjects = moveElementToFront(orderedProjects, forefrontIndex);
    //setOrderProjects(newOrderedProjects);
    setOrderProjects(prevOrderedProjects => moveElementToFront(prevOrderedProjects, forefrontIndex));
  }, [forefrontIndex]);
  
  return (
    <div
      tabIndex={0}
      onClick={handleSelectorToggle}
      className={`project-selector ${isSelectorFocus ? 'project-selector-active' : '' }`}>

      <div className="project-name-wrapper">
        <RegularList 
          items={orderedProjects}
          resourceName="project"
          ItemComponent={ProjectSelectorListItem}
          optionalProp1={handleProjectDisplay}
          optionalProp2={handleSelectorProjectClick}/>         
      </div>
    
      <div className="project-icon-container">
        <div className="project-icon-wrapper">
          <FontAwesomeIcon className={`project-icon ${isSelectorFocus ? 'project-icon-active' : '' }`} icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  );
};

//_____________________________________________________________

const ProjectCard = ({ projectNameDisplayed }) => {
  const [projectName, setProjectName] = useState(projectNameDisplayed);

  useEffect(() => {
    setProjectName(projectNameDisplayed);
  }, [projectNameDisplayed]);

  return (
    <>
      <div className="project-card">
        <RegularList 
          items={projects}
          resourceName="project"
          ItemComponent={ProjectCardListItem} 
          optionalProp1={projectName} />         
      </div>
    </>
  );
};


