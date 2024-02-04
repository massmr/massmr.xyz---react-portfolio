import { ImagesContainer } from '../ImagesContainer/ImagesContainer.jsx';
import MDPortrait from "../assets/FM20.jpg"

export const Item1 = () => {
  
  return(
    <>
      <ImagesContainer 
        name="item1-image"
        source={MDPortrait} 
      />
      <button className="item1-button">Projects</button>
    </>
  );
};
