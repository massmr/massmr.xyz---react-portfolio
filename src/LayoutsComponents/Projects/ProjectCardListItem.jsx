import { useState, useEffect } from 'react'
import './ProjectCardListItem.css' 

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
library.add({ faArrowUpRightFromSquare })

//import components
import { Card } from '../Card/Card.jsx'
import { ProjectImage } from './ProjectImage.jsx'
import { CardButton } from '../Card/CardButton.jsx'

export const ProjectCardListItem = ({
  project, 
  optionalProp1,
  }) => {
  //here, optionalProp1 is the project to actually selected
  const { name, images, description, url } = project;
  
  //trigger the cards animation
  const [isImageDisplay, setIsImageDisplay] = useState(true);
  const [isDescriptionDisplay, setIsDescriptionDisplay] = useState(false);
  const [isWidthDescription, setIsWidthDescription] = useState(true);

  const handleImageToggle = () => {
    setIsImageDisplay((prev) => !prev);
  }
  const handleDescriptionToggle = () => {
    setIsDescriptionDisplay((prev) => !prev); 
  }
  const handleWidthDescriptionToggle = () => {
    setIsWidthDescription((prev) => !prev);
  }
  
  const handleClick = () => {
    if (isImageDisplay) {
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

   //detect img dimensions, determine style to apply
  return(
    <>
      {(optionalProp1 === name) && (
       <>
          <Card 
            isActive={isImageDisplay}
            customClasses={`project-image ${isImageDisplay ? `project-image-active` : `project-image-not-active`}`}>
            <ProjectImage 
              project={project} 
              projectSelected={optionalProp1}
              isImageDisplay={isImageDisplay} />
            <CardButton 
              category='image'
              handleClick={handleClick}>
              Read more
            </CardButton>
          </Card>
              
         
          <Card
            isActive={isDescriptionDisplay}
            customClasses={`project-description ${isDescriptionDisplay ? `project-description-active` : `project-description-not-active`} ${isWidthDescription ? `project-description-reset-width` : ''}`}
            optionalProp={isWidthDescription} >
          
            <div className="project-description-text-wrapper">
              
              <p className="project-description-subtitle">{description}</p>
              
              <div className="project-description-anchor-wrapper">
                <a 
                  className="project-description-anchor"
                  href={url} target="_blank">
                  <h1 className="project-description-title">
                    Visit&nbsp; 
                    <span className="project-description-proj-name">
                      {name}
                    </span>
                  </h1>
                  <FontAwesomeIcon 
                    className="project-description-anchor-icon" 
                    icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>

            </div>
            
            <div className="project-description-text-spacer">
              <CardButton
                category='description'
                handleClick={handleClick}>
                Show images
              </CardButton>
            </div>

          </Card>
        </>
      )}
    </>
  );
};
