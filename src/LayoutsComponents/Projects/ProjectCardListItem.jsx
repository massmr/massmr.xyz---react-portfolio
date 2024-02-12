import { useState, useEffect } from 'react'
import './ProjectCardListItem.css' 

//images
import mi1 from '../../Utils/assets/img/FM20.jpg'
import mi2 from '../../Utils/assets/img/IMGP4514-Modifier.jpg'
import mi3 from '../../Utils/assets/img/FM21.jpg'
import oh1 from '../../Utils/assets/img/omf1.jpg'
import oh2 from '../../Utils/assets/img/omf2.jpg'
import oh3 from '../../Utils/assets/img/omf3.jpg'

const imageMap = { mi1, mi2, mi3, oh1, oh2, oh3 };

export const ProjectCardListItem = ({
  project, 
  optionalProp1,
  }) => {
  //here, optional is the project to actually selected
   
  const { name, images, description } = project;
  
  //image selection
  const [count, setCount] = useState(1);
  
  //reset count 
  useEffect(() => {
    setCount(1);
  }, [optionalProp1])

  //carrousel in loop if 3 images
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      (count < 3) ? setCount(count + 1) : setCount(1);
    }, 4000)

    return () => clearTimeout(timeoutId);
  }, [count]);

  const selectedIdentifier = optionalProp1.slice(0, 2) + count.toString();
  const selectedImage = imageMap[selectedIdentifier]; 

  //trigger the cards animation
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
            className={`project-card-item project-image ${ isImagesDisplay ? 'project-images-active' : 'project-images-not-active' }`}>
            <img
              className="project-img"
              alt={images[0].alt} 
              src={selectedImage} />
            <button
              onClick={handleClick}
              className="project-button project-image-button">
              Read more
            </button>
          </div>
    
          <div 
            className={`project-card-item project-description ${ isDescriptionDisplay ? 'project-description-active' : 'project-description-not-active'} ${isWidthDescription ? 'project-description-reset-width' : ''}`}>
            <h1 className="project-description-title">{name}</h1>
            <p className="project-description-subtitle">{description}</p>
            <button
              onClick={handleClick}
              className="project-button project-description-button">
              Show less
            </button>
          </div>
        </>
      )}
    </>
  );
};