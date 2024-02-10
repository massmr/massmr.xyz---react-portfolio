import { useState, useEffect } from 'react';
import './ItemPage.css'

export const ItemPage = ({ 
  name = null,
  isItemPageActive,
  children }) => {

  const [isItemPageVisible, setIsItemPageVisible] = useState(false);

  useEffect(() => {
    if (isItemPageActive) {
      const timeoutId = setTimeout(() => {
        setIsItemPageVisible(true);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [isItemPageActive]);
  
  console.log("itempage " + isItemPageActive);

  return (
    <div className={`item-page ${name ? 'item-page-' + name : '' } ${isItemPageVisible ? 'item-page-active' : ''}`}>
      {children}
    </div>
  )
}
