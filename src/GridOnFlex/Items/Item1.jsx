//import styles
import './Item1.css';

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
