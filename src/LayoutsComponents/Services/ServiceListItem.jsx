import { useState, useEffect } from 'react'

import './ServiceListItem.css'

import { SeeDetailButton } from '../Services/ServiceDetailButton.jsx'
import { RegularList } from '../RegularList/RegularList.jsx'
import { ServiceDetailListItem } from './ServiceDetailListItem.jsx'
import { GoToContactButton } from './ServiceGoToContactButton.jsx'

export const ServiceListItem = ({ service }) => {
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
            <GoToContactButton />
          </div>
        )}

      </div>
    </div>
  );
};


