//import packages
import { useState, useEffect } from 'react'
import styled from 'styled-components'

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
    }, 80);
  }, []);

  const modaleBackgroundStyle = {
     position: 'fixed',
     top: 0,
     left: 0,
     width: '100%',
     height: '100vh',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     backdropFilter: 'blur(2.5px)',
     zIndex: 999,
     transition: 'opacity 80ms ease',
     opacity: isVisible ? 1 : 0,
  };

  const modaleBodyStyle = {
    display: 'block',
    minHeight: '150px',
    backgroundColor: 'rgba(225,225,225,0.6)',
    backdropFilter: 'blur(5px)',
    borderRadius: '12px',
    width: '80%',
    transition: 'opacity 80ms ease',
    opacity: isBackgroundVisible ? 1 : 0,
  };

  const contentWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'rgba(0,0,0,0.65)',
    borderRadius: '100%',
    boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.2)',
    transform: 'scale(1.3)',
    cursor: 'pointer',
  };

  return(
    <>
      { state &&
        <div 
          style={modaleBackgroundStyle}
          onClick={handleClose}>
          
          <div style={modaleBodyStyle}
            onClick={e => e.stopPropagation()}>
            
            <FontAwesomeIcon
              style={closeButtonStyle}
              onClick={handleClose}
              icon="fa-solid fa-circle-xmark" />

            <div style={contentWrapperStyle} >
              {children}
            </div>
          
          </div>

        </div>
      }
    </>
  );
};
