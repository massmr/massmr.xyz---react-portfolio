import { useState, useEffect } from 'react'

import './ServiceListItem.css'

import { SeeDetailButton } from '../Services/ServiceDetailButton.jsx'
import { RegularList } from '../RegularList/RegularList.jsx'
import { ServiceDetailListItem } from './ServiceDetailListItem.jsx'
import { GoToContactButton } from './ServiceGoToContactButton.jsx'

export const ServiceListItem = ({ service }) => {
  const { title, description, url, details } = service;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isShown, setIsShown] = useState(false);
  const [persistentDetails, setPersistentDetails] = useState(false);
  const [animateDetails, setAnimateDetails] = useState(false);
   
  const handleShowDetails = () => {
    setIsShown(true);
  };
  const handleHideDetails = () => {
    setAnimateDetails(false);
  }

  //always show for desktop useEffect 
  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsShown(true);
      setPersistentDetails(true);
    }
  }, [windowWidth])
  //show useEffect
  useEffect(() => {
    if (windowWidth < 1024) {
      if (isShown) {
        const timeoutId = setTimeout(() => {
          setAnimateDetails(true);
        }, 50);
      
        return () => clearTimeout(timeoutId);
      }  
    }
  }, [isShown]);
  //hide useEffect
  useEffect(() => {
    if (windowWidth < 1024) {
      if(!animateDetails) {
        const timeoutId = setTimeout(() => {
          setIsShown(false);
        }, 600);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [animateDetails]);

  return (
    <div className="service-wrapper">
      
      <div className="service-title-wrapper">
        <h2 className="service-title">{title}</h2>
      </div>
      
      <div className="service-content-wrapper">
        
        <p className="service-description">{description}</p>
        
        <div className="service-detail-and-button-wrapper">
        {(windowWidth < 1024) && (
          <SeeDetailButton 
            handleShowDetails={handleShowDetails} 
            handleHideDetails={handleHideDetails} />
        )}

        {(windowWidth >= 1024) && (
          <p className="service-button-text">Plan details :</p>
        )}
        
        { isShown && (
          <div className={`${(windowWidth < 1024) ? 'service-detail-container' : ''} ${animateDetails ? 'service-detail-container-active' : '' } ${persistentDetails ? 'service-detail-container-persistent' : '' }`}>
            <RegularList
              items={details}
              resourceName="detail"
              ItemComponent={ServiceDetailListItem} />
            <GoToContactButton />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};


