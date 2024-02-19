//import styles
import './Item1.css';

//import assets
import { ImagesContainer } from '../ImagesContainer/ImagesContainer.jsx'
import MDPortrait from "../../Utils/assets/img/FM20.jpg"
import gridProject from "../../Utils/assets/img/grid-project.svg"

export const Item1 = () => {
  
  return(
    <>
      <ImagesContainer
        name="item1-image"
        source={gridProject} 
      />
      <button className="item-1-button">PROJECTS</button>
    </>
  );
};
