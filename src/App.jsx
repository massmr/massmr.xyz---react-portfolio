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



//import styles 
import './App.css';

//import components displayed by modale :
//import { LinkItem } from './Grid/LinkItem/LinkItem.jsx';

const App = () => {
 
  //Grid logic : 
  //Go from home menu to bento grid
  const [isGridActive, setIsGridActive] = useState(false);

  const handleGridActivation = () => {
    setIsGridActive(true);
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
        
        <Banner />
        
        { !isGridActive && (
          <HomePage deployGrid={handleGridActivation} />
        )}
        
        { isGridActive && (
          <Grid 
            openModale={handleModaleOpen} 
            isGridActive={isGridActive} />       
        )}

      </section>
    </>
  );
};

export default App
