//import packages
import { useState } from 'react';

//import styles
import './Item1.css';

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add({ faChevronDown });

//import assets
import { ImagesContainer } from '../ImagesContainer/ImagesContainer.jsx';
import MDPortrait from "../assets/FM20.jpg"

export const Item1 = () => {
  
  return(
    <>
      <ImagesContainer
        name="item1-image"
        source={MDPortrait} 
      />
      <button className="item-1-button">Projects</button>
    </>
  );
};

//integrate db fetching
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
          <div className="project-name">
            <h1 className={`project-h1 ${isSelected ? 'project-h1-active' : '' }`}>Projects</h1>
          </div>
          <div className="project-name">
            <h1 className={`project-h1 ${isSelected ? 'project-h1-active' : '' }`}>micheldupre.com</h1>
          </div>
          <div className="project-name">
            <h1 className={`project-h1 ${isSelected ? 'project-h1-active' : '' }`}>Oh my food</h1>
          </div>
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
    
        <div className="project-images">
          <img src={MDPortrait} />
        </div>
        <div className="project-description">
      
        </div>
      </div>
    </>
  );
};


//<FontAwesomeIcon className={`project-icon ${isSelectorActive ? 'project-icon-active' : '' }`} icon="fa-solid fa-chevron-down" />
