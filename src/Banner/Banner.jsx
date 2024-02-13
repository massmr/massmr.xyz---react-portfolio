import { useState, useEffect } from 'react'
import './Banner.css'

export const Banner = ({ 
  isGridActive,
  handleItemPageClose,
  isItemPageActive }) => {
  
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
      const timeoutId = setTimeout(() => {
        activateHomeButton();
      }, 300);
    }
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
