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
import { ProjectNameListItem } from '../Projects/ProjectListItem.jsx'

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
            ItemComponent={ProjectNameListItem} />         

        </div>
    
        <div className="project-icon-container">
          <div className="project-icon-wrapper">
            <FontAwesomeIcon className={`project-icon ${isSelected ? 'project-icon-active' : '' }`} icon="fa-solid fa-chevron-down" />
          </div>
        </div>
      </div>

      <div className="item-1-spacer"></div>
    
      <ProjectCard />

    </div>
  );    
};

export const ProjectCard = () => {
  const [isImagesDisplay, setIsImagesDisplay] = useState(true);
  const [isDescriptionDisplay, setIsDescriptionDisplay] = useState(false);
  const [isWidthDescription, setIsWidthDescription] = useState(true);

  const handleImageToggle = () => {
    setIsImagesDisplay((prev) => !prev);
  }
  const handleDescriptionToggle = () => {
    setIsDescriptionDisplay((prev) => !prev); 
  }
  const handleWidthDescriptionToggle = () => {
    setIsWidthDescription((prev) => !prev);
  }
  
  const handleClick = () => {
    if (isImagesDisplay) {
      handleImageToggle();
      handleWidthDescriptionToggle();
      const timeoutId = setTimeout(() => {
        handleDescriptionToggle();
      }, 175);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      handleDescriptionToggle();
      const timeoutId = setTimeout(() => {
        handleImageToggle();
        handleWidthDescriptionToggle();
      }, 175);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  };

  return (
    <>
      <div className="project-card">
    
        <div 
          onClick={handleClick}
          className={`project-card-item project-image ${ isImagesDisplay ? 'project-images-active' : 'project-images-not-active' }`}>
      </div>

        <div 
          onClick={handleClick}
          className={`project-card-item project-description ${ isDescriptionDisplay ? 'project-description-active' : 'project-description-not-active'} ${isWidthDescription ? 'project-description-reset-width' : ''}`}>
        </div>
      </div>
    </>
  );
};


