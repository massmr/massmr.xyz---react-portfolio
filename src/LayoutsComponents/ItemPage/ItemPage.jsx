import React from 'react'
import { useState, useEffect } from 'react'
import './ItemPage.css'

import { Item1PageContent } from '../ItemPage/Item1Page.jsx'

export const ItemPage = ({ 
  name,
  isItemPageActive,
  }) => {

  //launch the opacity animation :
    //1-comp is activated from parent (Aoo) with isItemPageActive
    //2-if isItemPageActive cahgnes && true : launch animation
  const [isItemPageVisible, setIsItemPageVisible] = useState(false);
  
  useEffect(() => {
    if (isItemPageActive) {
      const timeoutId = setTimeout(() => {
        setIsItemPageVisible(true);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [isItemPageActive]);
  
  return (  
    <div className={`item-page ${name ? 'item-page-' + name : '' } ${isItemPageVisible ? 'item-page-active' : ''}`}>
    
      {(name === "item1") && (
        <Item1PageContent name={name} />
      )}
    
    </div>
  )
}
