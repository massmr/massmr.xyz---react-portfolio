import { useState, useEffect } from 'react'

import './ProjectImage.css'

import mi1 from '../../Utils/assets/img/FM20.jpg'
import mi2 from '../../Utils/assets/img/IMGP4514-Modifier.jpg'
import mi3 from '../../Utils/assets/img/FM21.jpg'
import oh1 from '../../Utils/assets/img/omf1.jpg'
import oh2 from '../../Utils/assets/img/omf2.jpg'
import oh3 from '../../Utils/assets/img/omf3.jpg'

import { fetchDimensions } from '../../Utils/fetchFormat.js'

//To have perfect image styling, more infos on the images are
//necessary.
//Dimensions and orientaion will determine image style
//To Do : determine the exact moment when height must be set to
//100%

const imageMap = { 
  mi1: {
    src: mi1,
    dimensions: { width: 100, height: 100 },
    orientation: "portrait",
  }, 
  mi2: {
    src: mi2,
    dimensions: { width: 100, height: 100 },
    orientation: "portrait",
  },
  mi3: {
    src: mi3,
    dimensions: { width: 100, height: 100 },
    orientation: "portrait",
  }, 
  oh1: {
    src: oh1,
    dimensions: { width: 100, height: 100 },
    orientation: "portrait",
  }, 
  oh2: {
    src: oh2,
    dimensions: { width: 100, height: 100 },
    orientation: "portait",
  }, 
  oh3: {
    src: oh3,
    dimensions: { width: 100, height: 100 },
    orientation: "portrait",
  }, 
};

export const ProjectImage = ({ 
  project, 
  projectSelected,
  isImagesDisplay }) => {

  const { name, images, description, url } = project;

  //image selection
  const [count, setCount] = useState(1);
  
  //reset count 
  useEffect(() => {
    setCount(1);
  }, [projectSelected, isImagesDisplay])

  //carrousel in loop if 3 images
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      (count < 3) ? setCount(count + 1) : setCount(1);
    }, 4000)

    return () => clearTimeout(timeoutId);
  }, [count]);

  //the images are named as this : 1st two chars of name + count
  const selectedIdentifier = projectSelected.slice(0, 2) + count.toString();
  const selectedImage = imageMap[selectedIdentifier]; 

  return (
    <>
      <img
        className="project-img"
        alt={images[0].alt}
        src={selectedImage.src} />
    </>
  )
}
