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

const ProjectSelector = ({ handleProjectDisplay }) => {

  const [isSelectorFocus, setIsSelectorFocus] = useState(false);
  
  const handleSelectorToggle = () => {
    setIsSelectorFocus((prev) => !prev)
  }

  return (
    <div
      tabIndex={0}
      onClick={handleSelectorToggle}
      className={`project-selector ${isSelectorFocus ? 'project-selector-active' : '' }`}>

      <div className="project-name-wrapper">
        <RegularList 
          items={projects}
          resourceName="project"
          ItemComponent={ProjectSelectorListItem}
          optionalProp1={handleProjectDisplay} />         
      </div>
    
      <div className="project-icon-container">
        <div className="project-icon-wrapper">
          <FontAwesomeIcon className={`project-icon ${isSelectorFocus ? 'project-icon-active' : '' }`} icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ projectNameDisplayed }) => {
  const [projectName, setProjectName] = useState(projectNameDisplayed);

  useEffect(() => {
    setProjectName(projectNameDisplayed);
  }, [projectNameDisplayed]);

  console.log(projectName);
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


