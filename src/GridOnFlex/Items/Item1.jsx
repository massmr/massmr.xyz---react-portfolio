//import styles
import './Item1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add({ faChevronRight });

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

//will fetch data from db
export const Item1PageContent = () => (
  <div className="item-1-page">
    <div className="project-selector">
      <div className="project-1 michel-dupre-com">
        <h1>micheldupre.com</h1>
      </div>
      <div className="project-2 oh-my-food">
        <h1>Oh my food</h1>
      </div>
    </div>
    <div className="item-1-content-wrapper">
    
    </div>
  </div>
);
