//import packages
import { useState, useEffect } from 'react'
import styled from 'styled-components'

//import styles
import './Modale.css';

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
library.add({ faCircleXmark });

export const Modale = ({ children, 
  state, 
  handleClose }) => {

  //trigger background animation
  const [isVisible, setIsVisible] = useState(false);
  //trigger body animation
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(
    false
  );

  //trigger one animation after the other
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsBackgroundVisible(true);
    }, 190);
  }, []);

  //trigger closing animation
  const closeModale = () => {
    setIsBackgroundVisible(false);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        handleClose();
      }, 190);
    }, 60)
  };

  return(
    <>
      { state &&
        <div 
          className={`modale-background ${isVisible ? 'modale-background-active' : ''}`}
          onClick={closeModale}>
          
          <div
            className={`modale-body ${isBackgroundVisible ? 'modale-body-active' : ''}`}
            onClick={e => e.stopPropagation()}>
            
            <FontAwesomeIcon
              className="modale-close-button"
              onClick={closeModale}
              icon="fa-solid fa-circle-xmark" />

            <div className="modale-wrapper">
              {children}
            </div>
          
          </div>

        </div>
      }
    </>
  );
};
