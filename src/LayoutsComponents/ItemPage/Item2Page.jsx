import { ComingSoon } from '../ComingSoon.jsx'
import { RegularList } from '../RegularList/RegularList.jsx'
import { services } from '../../Utils/services.js'
import  './Item2Page.css'

export const Item2Preview = ({ name }) => {

  return (
    <ComingSoon />
  );
};

export const Item2PageContent = ({ name }) => {
  
  return (
    <>
      <section className="service-container">
        <RegularList
          items={services}
          resourceName="service"
          ItemComponent={ServiceListItem} />
      </section>
    </>
  );
};

//______________________________________________________________
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons"
library.add({ faPlus, faCheck })
import { useState, useEffect } from 'react'

const ServiceListItem = ({ service }) => {
  const { title, description, url, details } = service;

  const [isShown, setIsShown] = useState(false);
  const [animateDetails, setAnimateDetails] = useState(false);
  
  const handleShowDetails = () => {
    setIsShown(true);
  };
  const handleHideDetails = () => {
    setAnimateDetails(false);
  }

  //show useEffect
  useEffect(() => {
    if (isShown) {
      const timeoutId = setTimeout(() => {
        setAnimateDetails(true);
      }, 50);
      
      return () => clearTimeout(timeoutId);
    }   
  }, [isShown]);
  //hide useEffect
  useEffect(() => {
    if(!animateDetails) {
      const timeoutId = setTimeout(() => {
        setIsShown(false);
      }, 600);
      return () => clearTimeout(timeoutId);
    }
  }, [animateDetails]);

  return (
    <div className="service-wrapper">
      
      <div className="service-title-wrapper">
        <h2 className="service-title">{title}</h2>
      </div>
      
      <div className="service-content-wrapper">
        
        <p className="service-description">{description}</p>
        
        <SeeDetailButton 
          handleShowDetails={handleShowDetails} 
          handleHideDetails={handleHideDetails} />
        
        { isShown && (
          <div className={`service-detail-container ${animateDetails ? 'service-detail-container-active' : '' }`}>
            <RegularList
              items={details}
              resourceName="detail"
              ItemComponent={ServiceDetailListItem} />
            <div className="go-to-contact-button-container">
              <button className="go-to-contact-button">Ask for princing</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

//______________________________________________________________
const SeeDetailButton = ({ 
  handleShowDetails,
  handleHideDetails,
  }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleToggleHover = () => {
    setIsHovered((prev) => !prev);
  }
  const handleToggleActivation = () => {
    setIsActive((prev) => !prev);
  }
  const handleClick = () => {
    handleShowDetails();
    handleHideDetails();
    handleToggleActivation();
  }

  return (
    <div className="service-button-wrapper">
      <p
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleHover}
        onClick={handleClick}
        className="service-button-text">See plan details</p>
      <FontAwesomeIcon 
        className={`service-button-icon ${(isHovered || isActive) ? 'service-button-icon-animated' : '' } ${isActive ? 'service-button-icon-active' : '' }`}
        icon="fa-solid fa-plus" />
    </div>
  );
};

//______________________________________________________________
const ServiceDetailListItem = ({ detail }) => {
  //const { detail } = service;

  return (
    <div className="service-detail-wrapper">
      <FontAwesomeIcon 
        className="service-detail-icon"
        icon="fa-solid fa-check" />
      <p className="service-detail-text">{detail}</p>
    </div>
  );
};
