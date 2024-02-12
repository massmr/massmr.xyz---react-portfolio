import { useState } from 'react'
import './ProjectCardListItem.css' 

export const ProjectCardListItem = ({ 
  project, 
  optionalProp1,
  }) => {

  const { name, images, description } = project;
  
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

  //To do : integrate callback, to detect which project is selected
  return(
    <>
      {(optionalProp1 === name) && (
        <>
          <div 
            onClick={handleClick}
            className={`project-card-item project-image ${ isImagesDisplay ? 'project-images-active' : 'project-images-not-active' }`}>
            <img alt={images.alt} src={images.url} />
          </div>
    
          <div 
            onClick={handleClick}
            className={`project-card-item project-description ${ isDescriptionDisplay ? 'project-description-active' : 'project-description-not-active'} ${isWidthDescription ? 'project-description-reset-width' : ''}`}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </>
      )}
    </>
  );
};
