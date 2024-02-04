//import packages
import { useState } from 'react';
import styled from 'styled-components';

//import components
import { Header } from './Header/Header.jsx';
import { Banner } from './Banner/Banner.jsx';
import { BentoGrid } from './Grid/Grid.jsx';
import { Modale } from './LayoutsComponents/Modal/Modal.jsx';

//import components displayed by modale :
import { LinkItem } from './Grid/LinkItem/LinkItem.jsx';

const BodyBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background: rgb(102,103,166);
  background: linear-gradient(30deg, rgba(102,103,166,1) 0%, rgba(46,45,66,1) 100%); 
`;

const App = () => {
  
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
      <BodyBackground>

        { isModaleVisible && (
          <Modale 
            state={isModaleVisible} 
            handleClose={handleModaleClose}>
            {isModaleContent}
          </Modale>
        )}
        
        <Banner />
        <BentoGrid openModale={handleModaleOpen} />
      </BodyBackground>
    </>
  );
};

export default App
