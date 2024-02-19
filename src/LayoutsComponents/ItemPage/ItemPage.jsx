import React from 'react'
import { useState, useEffect } from 'react'
import './ItemPage.css'

import { Item1PageContent } from '../ItemPage/Item1Page.jsx'
import { Item2PageContent } from '../ItemPage/Item2Page.jsx'
import { Item3PageContent } from '../ItemPage/Item3Page.jsx'
import { Item4PageContent } from '../ItemPage/Item4Page.jsx'
import { Item7PageContent } from '../ItemPage/Item7Page.jsx'

export const ItemPage = ({ 
  name,
  isItemPageActive,
  handleSwitch
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

      {(name === "item2") && (
        <Item2PageContent name={name} handleSwitch={handleSwitch} />
      )}
      
      {(name === "item3") && (
        <Item3PageContent name={name} />
      )}

      {(name === "item4") && (
        <Item4PageContent name={name} />
      )}

      {(name === "item7") && (
        <Item7PageContent name={name} />
      )}

    </div>
  )
} 
