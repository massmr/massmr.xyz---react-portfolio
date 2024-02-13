//import packages
import { useState, useEffect, useCallback } from 'react'

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
  const [isSelectorFocus, setIsSelectorFocus] = useState(false);
  const [orderedProjects, setOrderedProjects] = useState([...projects]);
  const [currentProjectName, setCurrentProjectName] = useState(orderedProjects[0]?.name || '');
  const [forefrontIndex, setForefrontIndex] = useState(0);

  const moveElementToFront = (array, indexEl) => {
    const newArray = [...array];
    const removedEl = newArray.splice(indexEl, 1);
    newArray.unshift(...removedEl);
    return newArray;
  };

  const handleSelectorToggle = () => {
    setIsSelectorFocus((prev) => !prev);
  };

  const handleSelectorProjectClick = useCallback((name) => {
    setCurrentProjectName(name);
  }, []);

  useEffect(() => {
    const index = orderedProjects.findIndex((project) => project.name === currentProjectName);
    setForefrontIndex(index);
  }, [currentProjectName, orderedProjects]);

  useEffect(() => {
    setOrderedProjects((prevOrderedProjects) => moveElementToFront(prevOrderedProjects, forefrontIndex));
  }, [forefrontIndex]);
  
  /*
  useEffect(() => {
    console.log("orderedProjects has been modified: ", orderedProjects);
  }, [orderedProjects]);
  */

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


