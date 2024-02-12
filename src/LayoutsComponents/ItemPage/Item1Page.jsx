//import packages
import { useState } from 'react'

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
import { ProjectListItem } from '../Projects/ProjectListItem.jsx'

//integrate db fetching
import { projects } from '../../Utils/projects.js'

export const Item1PageContent = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);
  
  const handleSelectorToggle = () => {
    setIsSelected((prev) => !prev)
  }
  
  return (
    <div className="item-1-page">
      <div
        tabIndex={0}
        onClick={handleSelectorToggle}
        className={`project-selector ${isSelected ? 'project-selector-active' : '' }`}>

        <div className="project-name-wrapper">
    
          <RegularList 
            items={projects}
            resourceName="project"
            ItemComponent={ProjectListItem} />         

        </div>
    
        <div className="project-icon-container">
          <div className="project-icon-wrapper">
            <FontAwesomeIcon className={`project-icon ${isSelected ? 'project-icon-active' : '' }`} icon="fa-solid fa-chevron-down" />
          </div>
        </div>
      </div>

      <div className="item-1-content-wrapper">
        <ProjectCard />
      </div>
    </div>
  );    
};

export const ProjectCard = () => {
  return (
    <>
      <div className="project-card">
    
        <div className="project-card-item project-images">
          <img src={MDPortrait} />
        </div>
        <div className="project-card-item project-description">
      
        </div>
      </div>
    </>
  );
};


