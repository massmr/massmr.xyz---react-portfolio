//vercel speed insight
import { SpeedInsights } from "@vercel/speed-insights/react";

//import packages
import { useState } from 'react';
import styled from 'styled-components';

//import components
import { Header } from './Header/Header.jsx';
import { Banner } from './Banner/Banner.jsx';
import { Grid } from './GridOnFlex/GridOnFlex.jsx';
import { Modale } from './LayoutsComponents/Modal/Modal.jsx';
import { HomePage } from './HomePage/HomePage.jsx';
import { ItemPage } from './ItemPage/ItemPage.jsx';

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
  
  //Grid logic : 
  //Go from home menu to bento grid
  //launch grid activation
  const [isGridActive, setIsGridActive] = useState(false);
  //launch grid closing animation
  const [isGridClosing, setIsGridClosing] = useState(false);

  const handleGridActivation = () => {
    setIsGridActive(true);
  }
  
  //Item Page logic :
    //Go from grid to ItemPage
      //1-grid close animation
      //2-deactivate grid
      //3-deploy itempage
  const [isItemPageActive, setIsItemPageActive] = useState(false);

  const [isItemPageContent, setIsItemPageContent] = useState();

  const handleOpenItemPage = (content) => {
    setIsGridClosing(true);
    setTimeout(() => {
      setIsGridActive(false);
      setIsGridClosing(false);
      setIsItemPageActive(true);
    }, 500);
    setIsItemPageContent(content)
  }

  //Close Home Page && Open grid : 
  const handleQuitHomePage = () => {
    handleCloseHomePage();
    handleGridActivation();
  } 

  //modale logic : 
    //set modale visibility to true if child component is clicked
    //get dynamic content to display from clicked componen
      
  const [isModaleVisible, setIsModaleVisible] = useState(false);
  
  const [isModaleContent, setIsModaleContent] = useState();
  
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

        { isModaleVisible && (
          <Modale 
            state={isModaleVisible} 
            handleClose={handleModaleClose}>
            {isModaleContent}
          </Modale>
        )}

        <Banner isGridActive={isGridActive} />
        
        { isItemPageActive && (
          <ItemPage isItemPageActive={isItemPageActive}>
          {isItemPageContent}
          </ItemPage>
        )}
        

        { isHomePage && !isGridActive && (
          <HomePage deployGrid={handleQuitHomePage} />
        )}
        
        { isGridActive && (
          <Grid 
            openItemPage={handleOpenItemPage}
            gridCloseAnimation={isGridClosing}
            openModale={handleModaleOpen} 
            isGridActive={isGridActive} />       
        )}

      </section>
    </>
  );
};

export default App
