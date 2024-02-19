//vercel speed insight
import { SpeedInsights } from "@vercel/speed-insights/react";

//import packages
import { useState, useEffect } from 'react';
import styled from 'styled-components';

//import components
import { Banner } from './Banner/Banner.jsx';
import { Grid } from './GridOnFlex/GridOnFlex.jsx';
import { Modale } from './LayoutsComponents/Modal/Modal.jsx';
import { HomePage } from './HomePage/HomePage.jsx';
import { ItemPage } from './LayoutsComponents/ItemPage/ItemPage.jsx';

//import styles 
import './App.css';

const App = () => {
  //Home page logic: 
  const [isHomePage, setIsHomePage] = useState(true);

  const handleCloseHomePage = () => {
    setIsHomePage(false);
  }
  const handleOpenHomePage = () => {
    setIsHomePage(false);
  }

 //Close Home Page && Open grid : 
  const handleQuitHomePage = () => {
    handleCloseHomePage();
    handleGridActivation();
  } 

  //Grid logic : 
  //Go from home menu to bento grid
  //launch grid activation
  const [isGridActive, setIsGridActive] = useState(false);
  //launch grid closing animation
  const [isGridClosing, setIsGridClosing] = useState(false);

  const handleGridActivation = () => {
    setIsGridActive(true);
  }
  
  //________________________________________________________
  //Item Page logic :
    //Go from grid to ItemPage
      //1-grid close animation
      //2-deactivate grid
      //3-deploy itempage
    //how ItemPage works : 
      //1-get name from comp clicked in grid
      //2-send it as prop to ItemPage
      //compare name and display corresponding Page
  const [isItemPageActive, setIsItemPageActive] = useState(false);

  const [isItemPageName, setIsItemPageName] = useState(``);

  const handleItemPageOpen = (name) => {
    setIsGridClosing(true);
    setIsItemPageName(name);
  }

  const handleItemPageClose = () => {
    setIsItemPageActive(false);
    setIsGridActive(true);
  }

  const handleItemPageSwitch = (name) => {
    setIsItemPageName(name);
  }
  
  //this useEFfect handles the closing animaiton
  useEffect(() => {
    if(isGridClosing) {
      const timeoutId = setTimeout(() => {
        setIsGridActive(false);
        setIsGridClosing(false);
        setIsItemPageActive(true);
      }, 1025);

      return () => clearTimeout(timeoutId);
    }
  }, [isGridClosing]);

  //________________________________________________________
  //modale logic : 
    //set modale visibility to true if child component is clicked
    //get dynamic content to display from clicked componen
      
  const [isModaleVisible, setIsModaleVisible] = useState(false);
  
  const [isModaleContent, setIsModaleContent] = useState(null);
  
  const handleModaleOpen = (content) => {
    setIsModaleVisible(true);
    setIsModaleContent(content);
  };

  const handleModaleClose = () => {
    setIsModaleVisible(false);
  };
 
  return(
    <>
      <SpeedInsights />
      <section className="body-background">

        { isModaleVisible && isModaleContent && (
          <Modale 
            state={isModaleVisible} 
            handleClose={handleModaleClose}>
            {isModaleContent}
          </Modale>
        )}

        <Banner 
          isGridActive={isGridActive}
          handleItemPageClose={handleItemPageClose} 
          isItemPageActive={isItemPageActive} />
        
        { isItemPageActive &&  isItemPageName &&(
          <ItemPage 
            name={isItemPageName} 
            isItemPageActive={isItemPageActive}
            handleSwitch={handleItemPageSwitch}>
          </ItemPage>
        )}

        { isHomePage && !isGridActive && (
          <HomePage deployGrid={handleQuitHomePage} />
        )}
        
        { isGridActive && (
          <Grid 
            openItemPage={handleItemPageOpen}
            gridCloseAnimation={isGridClosing}
            openModale={handleModaleOpen} 
            isGridActive={isGridActive} />       
        )}
      </section>
    </>
  );
};

export default App
