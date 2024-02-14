import { useState, useEffect } from 'react'
import './Banner.css'

export const Banner = ({ 
  isGridActive,
  handleItemPageClose,
  isItemPageActive }) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [homeButtonActive, setHomeButtonActive] = useState(false);
  
  const activateHomeButton = () => {
    setHomeButtonActive(true);
  }

  const handleClick = () => {
    if (isItemPageActive) {
      handleItemPageClose();
    }
  }

  useEffect(() => {
    if (isItemPageActive) {
      if(windowWidth >= 1024) {
        const timeoutId = setTimeout(() => {
          activateHomeButton();
        }, 500);
        return () => clearTimeout(timeoutId);
      } else {
        activateHomeButton();
      }
    }
  }, [isItemPageActive]);
 
  useEffect(() => {
    isItemPageActive ? null : setHomeButtonActive(false);
  }, [isItemPageActive]);

  return (
    <>
      <div className={`banner-wrapper ${isGridActive ? 'banner-deactivation' : ''}`}>
        <h1 
          className={`banner-title ${homeButtonActive ? 'banner-title-item-page' : '' }`}
          onClick={handleClick} >
          Massmr
        </h1>
        <div className="banner-text-wrapper">
          <h2 className="banner-subtitle">web developer</h2>
          <h4 className="banner-text">
          Enter the <span className="banner-text-strong"> digital realm</span>
          </h4>
        </div>
      </div>
    </>
  );
}
